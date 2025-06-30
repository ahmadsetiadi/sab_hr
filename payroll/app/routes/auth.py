from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.auth_schema import LoginRequest, LoginResponse
from app.services import auth_service
from app.session_store import create_session

router = APIRouter()

@router.post("/login", response_model=LoginResponse)
def login(data: LoginRequest, db: Session = Depends(get_db)):
    # print("001")
    user = auth_service.authenticate_user(db, data.username, data.password)
    # print("a")
    session_id, session_data = create_session(user.id_user, user.id_usergroup, user.username)
    # print("b")
    token = auth_service.create_access_token({"sub": str(user.id_user), "sid": session_id})
    # print("c")
    return {"access_token": token, "session_data": session_data}
