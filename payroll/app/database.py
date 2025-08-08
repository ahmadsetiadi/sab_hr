from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Konfigurasi koneksi MySQL
DATABASE_USER = "nasiona4"
DATABASE_PASSWORD = "VitXzlCpgzHG1#"
DATABASE_HOST = "10.147.17.134"
DATABASE_NAME = "sinar_hr"

# DATABASE_USER = "root"
# DATABASE_PASSWORD = ""
# DATABASE_HOST = "localhost"
# DATABASE_NAME = "sinar_hr_250503"

# Format URL koneksi
DATABASE_URL = f"mysql+pymysql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE_NAME}"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()