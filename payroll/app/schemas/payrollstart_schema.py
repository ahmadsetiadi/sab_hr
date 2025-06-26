from pydantic import BaseModel
from typing import List
from datetime import date  # gunakan date dari datetime

class PayrollStartSchema(BaseModel):
    tdate: date        # Tipe tanggal
    employee_ids: List[int]         # Tipe integer
