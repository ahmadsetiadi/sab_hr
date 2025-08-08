from pydantic_settings import BaseSettings

# Konfigurasi koneksi MySQL
DATABASE_USER = "nasiona4"
DATABASE_PASSWORD = "VitXzlCpgzHG1#"
DATABASE_HOST = "10.147.17.134"
DATABASE_NAME = "sinar_hr"

# Format URL koneksi
DATABASE_URL = f"mysql+pymysql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE_NAME}"


class Settings(BaseSettings):
    DB_URL: str = DATABASE_URL
    JWT_SECRET: str = "adi-hr-sinar-sinawafinia"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 300

    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379

    # class Config:
    #     env_file = ".env"   # 👈 penting: agar baca file .env di root project

settings = Settings()