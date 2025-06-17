from sqlalchemy import Column, Integer, Float, String, Date
from app.database import Base

class TMPPayrollDetail(Base):
    __tablename__ = 'tmp_payroll_detail'
    payroll_detail_id = Column(Integer, primary_key=True, index=True)
    payroll_id = Column(Integer, index=True)
    salary_id = Column(Integer)
    amount = Column(Float)
    debugamount = Column(Float)
    diff = Column(Float)
    salarycode = Column(String(255))
    jurnalorder = Column(Integer)
    name = Column(String(255))
    slipname = Column(String(255))
    acc = Column(String(255))
    sliporder = Column(Integer)
    summaryorder = Column(Integer)
    useradded = Column(String(255))
    dateadded = Column(Date)
    useredited = Column(String(50))
    dateedited = Column(Date)