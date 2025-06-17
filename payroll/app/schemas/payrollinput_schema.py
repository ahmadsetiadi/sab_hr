from pydantic import BaseModel
from datetime import date  # gunakan date dari datetime

class PayrollInputSchema(BaseModel):
    tdate: date        # Tipe tanggal
    employee_id: int         # Tipe integer
