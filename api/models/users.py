from pydantic import BaseModel, EmailStr





class UserOut(BaseModel):
    id: int
    password: str
    first: str
    last: str
    email: str
    username: str


class UserIn(BaseModel):
    password: str
    first: str
    last: str
    email: EmailStr
    username: str