from pydantic import BaseModel


class UserIn(BaseModel): #POST
    password: str
    first_name: str
    last_name: str
    email: str
    username: str

class UserOut(BaseModel): #GET
    id: int
    password: str
    first_name: str
    last_name: str
    email: str
    username: str

class UserList(BaseModel):
    users: list[UserOut]

class UserDeleteOperation(BaseModel):
    result: bool