from pydantic import BaseModel
from datetime import date  # gunakan date dari datetime
from typing import Optional

class PayrollInputSchema(BaseModel):
    tdate: date        # Tipe tanggal
    employee_id: int         # Tipe integer
    progress_id: Optional[int] = None
