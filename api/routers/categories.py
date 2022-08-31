from fastapi import APIRouter, Depends, Response, status
from db import CategoriesQueries
from models.categories import(
    CategoriesDeleteOperation,
    CategoriesIn,
    CategoriesList,
    CategoriesOut
)

router = APIRouter()

@router.get("/api/categories", response_model=CategoriesList, tags=["Categories"])
def categories_list(queries: CategoriesQueries = Depends()):
    return {
        "categories": queries.get_categories(),
    }

@router.get("/api/categories/{id}", response_model=CategoriesOut, tags=["Categories"])
def get_category(id: int, response: Response, queries: CategoriesQueries = Depends()):
    record = queries.get_category(id)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.post("/api/categories", response_model=CategoriesOut, tags=["Categories"])
def create_category(category: CategoriesIn, queries: CategoriesQueries = Depends()):
    return queries.create_category(category)

@router.put("/api/categories/{id}", response_model = CategoriesOut, tags =["Categories"])
def update_category(
    category_id: int,
    category_in: CategoriesIn,
    response: Response,
    queries: CategoriesQueries = Depends(),
):
    record = queries.update_category(category_id, category_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/categories/{id}", response_model=CategoriesDeleteOperation, tags=["Categories"])
def delete_category(category_id: int, queries: CategoriesQueries = Depends()):
    try:
        queries.delete_category(category_id)
        return {"result": True}
    except:
        return {"result": False}