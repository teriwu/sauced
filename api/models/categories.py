from pydantic import BaseModel
from typing import Optional


class CategoriesIn(BaseModel): #POST
    title: str
    alias: str

class CategoriesOut(BaseModel): # GET
    id: Optional[int]
    title: Optional[str]
    alias: Optional[str]

class CategoriesList(BaseModel):
    # page_count: int
    categories: list[CategoriesOut]

class CategoriesDeleteOperation(BaseModel):
    result: bool