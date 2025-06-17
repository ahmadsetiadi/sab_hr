from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from app.database import get_db
from app.config import settings
from app.schemas.payroll_schema import PayrollSchema
from app.services.payroll_service import PayrollService
from app.session_store import get_session
from app.schemas.payrollinput_schema import PayrollInputSchema

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
def create_payroll(data: PayrollInputSchema, db: Session = Depends(get_db), user=Depends(get_current_user)):
    service = PayrollService(db, data.tdate, data.employee_id)
    return service.create(data)

@router.get("/payroll")
def list_payrolls(db: Session = Depends(get_db), user=Depends(get_current_user)):
    service = PayrollService(db)
    return service.get_all()