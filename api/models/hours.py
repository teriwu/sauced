from xmlrpc.client import Boolean
from pydantic import BaseModel


class HourIn(BaseModel): #POST
    is_overnight: bool
    end_: int
    day: int
    start_: int




class HourOut(BaseModel): #GET
    id: int
    is_overnight: bool
    end_: int
    day: int
    start_: int



class HourList(BaseModel):
    hours: list[HourOut]

class HourDeleteOperation(BaseModel):
    result: bool