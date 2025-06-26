from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text, func
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from app.database import get_db
from app.config import settings
from app.schemas.payroll_schema import PayrollSchema
from app.services.payroll_service import PayrollService
from app.session_store import get_session
from app.schemas.payrollinput_schema import PayrollInputSchema
from app.schemas.payrollstart_schema import PayrollStartSchema
from app.schemas.usersession_schema import UserSessionSchema
from app.models.payrollprogress import TPayrollProgress
from datetime import datetime
from datetime import date
from fastapi import BackgroundTasks


router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
        sid = payload.get("sid")        
        session = get_session(sid)    
        if not session:
            raise HTTPException(status_code=401, detail="Invalid session")
        return session
    except JWTError:
        raise HTTPException(status_code=403, detail="Invalid token")

@router.post("/payroll")
def create_payroll(data: PayrollInputSchema, db: Session = Depends(get_db), user : UserSessionSchema = Depends(get_current_user)):
    service = PayrollService(db, data.tdate, data.employee_id, user)
    return service.create(data.tdate, data.employee_id, 0)

@router.get("/payroll/progress/{progress_id}")
def get_payroll_progress(progress_id: int, db: Session = Depends(get_db)):
    row = db.execute(text("SELECT * FROM t_payroll_progress WHERE progress_id = :progress_id"), {"progress_id": progress_id}).fetchone()
    if row:
        return {
            "progress_id": progress_id,
            "total": row.total_employee,
            "done": row.processed_employee,
            "percent": round(row.processed_employee / row.total_employee * 100, 2),
            "is_done": row.is_done
        }
    return {"percent": 0}

@router.post("/payroll/start")
def start_payroll(
    background_tasks: BackgroundTasks,
    data: PayrollStartSchema, 
    db: Session = Depends(get_db), 
    user: UserSessionSchema = Depends(get_current_user)    
):
    existing : TPayrollProgress = db.query(TPayrollProgress).filter(
        func.month(TPayrollProgress.tdate) == data.tdate.month,
        func.year(TPayrollProgress.tdate) == data.tdate.year,
        TPayrollProgress.is_done == 0
    ).first()
    usr = UserSessionSchema(**user)

    # print(bool(existing.is_done))
    if existing and existing.is_done==0:
        raise HTTPException(status_code=400, detail="Payroll is processing by another user")


    new_progress = TPayrollProgress(
        tdate = data.tdate.replace(day=1).strftime('%Y-%m-%d'),
        total_employee = len(data.employee_ids),
        processed_employee = 0,
        is_done=False,
        useradded=usr.username,
        dateadded=datetime.now()
    )
    db.add(new_progress)
    db.commit()
    db.refresh(new_progress)  # agar progress_id terisi dari autoincrement DB

    # ⏳ Jalankan proses payroll di background
    background_tasks.add_task(run_payroll_process, data.tdate, data.employee_ids, new_progress.progress_id, user)

    return {"progress_id": new_progress.progress_id}

def run_payroll_process(
        tdate: date,
        employee_ids: list[int], 
        progress_id: int, 
        user: UserSessionSchema = Depends(get_current_user)
):
    from app.database import SessionLocal
    from app.services.payroll_service import PayrollService
    from app.schemas.usersession_schema import UserSessionSchema

    db = SessionLocal()
    try:
        for eid in employee_ids:
            try:
                # print("xxxxx")
                service = PayrollService(db, tdate, eid, user)
                # print("ccccc")
                service.create(tdate, eid, progress_id)
                # print("dddd")
            except Exception as e:
                print(f"❌ Failed Process Payroll for ID {eid}: {e}")
                continue

            # update progress setelah satu employee selesai
            db.execute(text("""
                UPDATE t_payroll_progress 
                SET processed_employee = processed_employee + 1,
                    is_done = CASE WHEN processed_employee + 1 >= total_employee THEN 1 ELSE 0 END
                WHERE progress_id = :progress_id
            """), {"progress_id": progress_id})
            db.commit()
    finally:
        db.close()
