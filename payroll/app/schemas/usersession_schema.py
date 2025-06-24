from pydantic import BaseModel, confloat
from typing import Optional

class UserSessionSchema(BaseModel):
    id_user: int
    id_usergroup: int
    username: str
