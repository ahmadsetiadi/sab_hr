from fastapi import FastAPI
from app.routes import auth, payroll
from app.database import Base, engine
from app.models import user, payroll as payroll_model

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(auth.router)
app.include_router(payroll.router)

