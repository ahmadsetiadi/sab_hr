from sqlalchemy import Column, Integer, Float, String, Date, Time, LargeBinary
from app.database import Base

class TFingerLog(Base):
    __tablename__ = 't_fingerlog'
    fingerlog_id = Column(Integer, primary_key=True, index=True)
    
    fingerid = Column(String(255))
    fingername = Column(String(255))
    username = Column(String(255))
    employee_id = Column(Integer)
    nip = Column(String(255))
    name = Column(String(255))
    fulldate = Column(Date)
    tdate = Column(Date)
    ttime = Column(Time)
    inoutmode = Column(Integer)

    useradded = Column(String(255))
    dateadded = Column(Date)
    useredited = Column(String(50))
    dateedited = Column(Date)