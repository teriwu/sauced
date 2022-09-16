from fastapi import APIRouter, Depends, Response #, status
# from fastapi.middleware.cors import CORSMiddleware
from db import UserQueries
from models.users import UserIn, UserOut # UserList, UserDeleteOperation

router = APIRouter()

# origins = ["http://localhost:3000"]

# router.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @router.get("/api/users", response_model=UserList, tags=["Users"])
# def user_list(queries: UserQueries = Depends()):
#     return {
#         "users": queries.get_users(),
#     }


@router.get("/api/users/{id}", response_model=UserOut, tags=["Users"])
def get_user(id: int, response: Response, queries: UserQueries = Depends()):
    record = queries.get_users(id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/users", response_model=UserIn, tags=["Users"])
def create_user(user: UserIn, queries: UserQueries = Depends()):
    return queries.create_user(user)

@router.post("/api/users/login", response_model=UserIn, tags=["Users"])
def login(user: UserIn, queries: UserQueries = Depends()):
    return queries.login(user)


@router.put("/api/users/{id}", response_model=UserOut, tags=["Users"])
def update_user(
    user_id: int,
    user_in: UserIn,
    response: Response,
    queries: UserQueries = Depends(),
):
    record = queries.update_user(user_id, user_in)
    if record is None:
        response.status_code = 404
    else:
        return record

# @router.delete("/api/users/{id}", response_model=UserDeleteOperation, tags=["Users"])
# def delete_user(user_id: int, queries: UserQueries = Depends()):
#     try:
#         queries.delete_user(user_id)
#         return {"result": True}
#     except:
#         return {"result": False}