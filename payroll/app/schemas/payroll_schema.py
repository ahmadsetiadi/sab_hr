from pydantic import BaseModel, confloat
from typing import Optional

class PayrollSchema(BaseModel):
    level: str
    tdate: str
    nip: str
    # totalincome: confloat(gt=0)  # harus lebih besar dari 0
    totalincome: Optional[float] = 0
    takehomepay: Optional[float] = 0
    note: Optional[str] = None
