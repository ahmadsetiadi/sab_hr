from fastapi import FastAPI
from app.routes import auth, payroll, slip
from app.database import Base, engine
from app.models import user, payroll as payroll_model
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Daftar origin yang diperbolehkan
# origins = [
#     "http://localhost:4200",  # frontend Angular saat dev
#     "http://127.0.0.1:4200",
#     # tambahkan origin lain jika perlu, misalnya domain production
# ]
origins = ["*"]

# Tambahkan middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # atau ["*"] untuk semua origin
    allow_credentials=True,
    allow_methods=["*"],              # izinkan semua method: GET, POST, dll
    allow_headers=["*"],              # izinkan semua header
)

app.include_router(auth.router)
app.include_router(payroll.router)
app.include_router(slip.router)

