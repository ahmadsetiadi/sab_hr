from fastapi import HTTPException
from jose import jwt
from datetime import datetime, timedelta
from app.config import settings
from app.models.user import User
from app.session_store import create_session
from sqlalchemy.orm import Session
from sqlalchemy.dialects import mysql
import hashlib

def md5_hash(password: str) -> str:
    return hashlib.md5(password.encode()).hexdigest()

def authenticate_user(db: Session, username: str, password: str):
    hashed_password = md5_hash(password)
    # print(username)
    # print(hashed_password)
   
    query = db.query(User).filter(
        User.username == username,
        User.password == hashed_password
    )

    # Cetak SQL-nya (dengan nilai literal)
    compiled = query.statement.compile(
        dialect=mysql.dialect(),
        compile_kwargs={"literal_binds": True}
    )
    # print(db.bind.url)
    # print(str(compiled))

    # Baru jalankan query-nya
    user = query.first()
    # print("c")

    if not user or user.password != hashed_password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return user

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
