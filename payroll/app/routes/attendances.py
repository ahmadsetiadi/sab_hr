from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.database import get_db, SessionLocal
from app.schemas.auth_schema import LoginRequest, LoginResponse
from app.services import auth_service
from app.session_store import create_session
from datetime import datetime
from app.models.fingerlog import TFingerLog
import io
import csv
from typing import Annotated
# import pandas as pd


router = APIRouter()

def getquery(sql: str):
    db = SessionLocal()
    try:
        result = db.execute(text(sql))
        return result.fetchall()
    finally:
        db.close()

@router.post("/upload-txt")
async def upload_txt(
    file: Annotated[UploadFile, File(...)],
    startdate: Annotated[str, Form(...)],
    enddate: Annotated[str, Form(...)],
    db: Session = Depends(get_db)
):
    
    if file.filename != "001_GL.TXT":    
        return {"error": "File harus bernama 001_GL.TXT"}
    print("=================")
    print(startdate)
    print(enddate)
    content = await file.read()
    text_stream = io.StringIO(content.decode("utf-8"))
    reader = csv.reader(text_stream, delimiter="\t")    
    next(reader, None) # skip header (baris pertama)
    
    logs = []

    for row in reader:
        # No	Mchn	EnNo		Name		Mode	IOMd	DateTime	
        # 000001	1	000000001	tatang        	1	0	2021/12/26  13:45:04
        # 000002	1	000000003	agung         	1	0	2021/12/26  14:08:23
        raw_date = row[6].strip() 
        dt = datetime.strptime(raw_date, "%Y/%m/%d %H:%M:%S")
        formatted_date = dt.strftime("%Y-%m-%d %H:%M:%S")
        log = TFingerLog(
            fingerid=row[2],
            fingername=row[3],
            inoutmode=row[4],
            name=row[3],
            fulldate=formatted_date
        )
        logs.append(log)

    db.add_all(logs)

    try:
        db.commit()
    except Exception as e:
        return {"status": "success", "rows_inserted": len(logs)}

    # generate_absen()
    # new function
    return {"status": "success", "rows_inserted": len(logs)}


def generate_absen(db: Session, sdate: datetime, edate: datetime):
    jarak = (edate - sdate).days + 1
    no = 1
    total = 0
    rows = getquery("SELECT * FROM m_employee LIMIT 1")
    for r in rows:
        print(r)

    
@router.post("/generate-attendance")
async def generate_attendance(
    startdate: Annotated[str, Form(...)],
    enddate: Annotated[str, Form(...)],
    db: Session = Depends(get_db)
):
    print("=================")
    print(startdate)
    print(enddate)
    # ✅ Convert string ke datetime.date
    sdate = datetime.strptime(startdate, "%Y-%m-%d").date()
    edate = datetime.strptime(enddate, "%Y-%m-%d").date()

    generate_absen(db, sdate, edate)    
    return {"status": "success", "rows_inserted": 0}