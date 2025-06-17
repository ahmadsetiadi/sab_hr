from sqlalchemy import Column, Integer, String, Date
from app.database import Base

class User(Base):
    __tablename__ = 's_user'
    id_user = Column(Integer, primary_key=True, index=True)
    id_usergroup = Column(Integer, index=True)
    username = Column(String(50), unique=True, index=True)
    password = Column(String(100))
    active = Column(Integer)
    nip = Column(String(100))
    employee_id = Column(Integer)
    listemployeeid = Column(String(100))
    useradded = Column(String(50))
    dateadded = Column(Date)
    useredited = Column(String(50))
    dateedited = Column(Date)