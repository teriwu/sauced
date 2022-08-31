from pydantic import BaseModel


class CategoriesIn(BaseModel): #POST
    title: str
    alias: str

class CategoriesOut(BaseModel): # GET
    id: int
    title: str
    alias: str

class CategoriesList(BaseModel):
    # page_count: int
    categories: list[CategoriesOut]

class CategoriesDeleteOperation(BaseModel):
    result: bool