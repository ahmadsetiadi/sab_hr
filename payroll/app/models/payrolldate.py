from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class MPayrollDate(Base):
    __tablename__ = "m_payrolldate"

    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    tdate = Column(Date)
    payrollfield = Column(String(50))
    comp_month = Column(Integer)
    comp_date = Column(Integer)
