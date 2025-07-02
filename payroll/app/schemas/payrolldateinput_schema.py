from pydantic import BaseModel

class PayrollDateInputSchema(BaseModel):
    id: int
    year: int
