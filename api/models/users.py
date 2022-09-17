from pydantic import BaseModel
from bson.objectid import ObjectId
from typing import List

class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except:
                raise ValueError(f"Not a valid object id: {value}")
        return value



class UserIn(BaseModel): #POST
    password: str
    first: str
    last: str
    email: str
    username: str

class User(UserIn):
    id: PydanticObjectId
    roles: List[str]

class UserOut(BaseModel): #GET
    id: int
    password: str
    first: str
    last: str
    email: str
    username: str
    roles: List[str]

# class UserList(BaseModel):
#    users: list[UserOut]

# class UserDeleteOperation(BaseModel):
#    result: bool