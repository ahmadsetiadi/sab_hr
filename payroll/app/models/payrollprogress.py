from sqlalchemy import Column, Integer, String, Date, Boolean
from app.database import Base

class TPayrollProgress(Base):
    __tablename__ = 't_payroll_progress'
    progress_id = Column(Integer, primary_key=True, index=True)
    tdate = Column(Date)
    total_employee = Column(Integer)
    processed_employee = Column(Integer)
    is_done = Column(Boolean, default=False)
    useradded = Column(String(255))
    dateadded = Column(Date)
    useredited = Column(String(50))
    dateedited = Column(Date)