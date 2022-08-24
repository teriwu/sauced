from pydantic import BaseModel, EmailStr





class UserIn(BaseModel):
    password: str
    first: str
    last: str
    email: EmailStr
    username: str


class UserOut(BaseModel):
    id: int
    first: str
    last: str
    email: str
    username: str


