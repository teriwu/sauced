from datetime import datetime, timedelta
from typing import Union, Optional
from db import UserQueries

from fastapi import (
    FastAPI,
    Depends,
    HTTPException,
    status,
    Response,
    Cookie,
    APIRouter,
    Request,
)
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt, jws, JWSError
from passlib.context import CryptContext
from pydantic import BaseModel

import os


from routers import (
    restaurants as psql_restaurants,
    # hours as psql_hours,
    pictures as psql_pictures,
    categories as psql_categories,
    locations as psql_locations,
    reviews as psql_reviews,
    users as psql_users,
)


SIGNING_KEY = os.environ["SIGNING_KEY"]
ALGORITHM = "HS256"
COOKIE_NAME = "fastapi_access_token"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class HttpError(BaseModel):
    detail: str


class TokenData(BaseModel):
    username: str


class AccessToken(BaseModel):
    token: str


class User(BaseModel):
    id: int
    user: str
    password: str
    email: str


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()


def verify_password(plain_password):
    return pwd_context.verify(plain_password)


def authenticate_user(repo: UserQueries, username: str, password: str):
    user = repo.get_user(username)
    if not user:
        return False
    if user["password"] != password:
        # if not verify_password(password, user["hashed_password"]):
        return False
    return user


def create_access_token(data: dict):
    to_encode = data.copy()
    encoded_jwt = jwt.encode(to_encode, SIGNING_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(
    bearer_token: Optional[str] = Depends(oauth2_scheme),
    cookie_token: Optional[str] | None = (Cookie(default=None, alias=COOKIE_NAME)),
    repo: UserQueries = Depends(),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token = bearer_token
    if not token and cookie_token:
        token = cookie_token
    try:
        payload = jwt.decode(token, SIGNING_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise credentials_exception
    except (JWTError, AttributeError):
        raise credentials_exception
    user = repo.get_user(username)
    if user is None:
        raise credentials_exception
    return user


@app.post("/token")
async def login_for_access_token(
    response: Response,
    request: Request,
    form_data: OAuth2PasswordRequestForm = Depends(),
    repo: UserQueries = Depends(),
):
    user = authenticate_user(repo, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(
        data={"sub": user[username]},
    )
    token = {"access_token": access_token, "token_type": "bearer"}
    headers = request.headers
    samesite = "none"
    secure = True
    if "origin" in headers and "localhost" in headers["origin"]:
        samesite = "lax"
        secure = False
    response.set_cookie(
        key=COOKIE_NAME,
        value=access_token,
        httponly=True,
        samesite=samesite,
        secure=secure,
    )
    return token


@app.get("/token", response_model=AccessToken)
async def get_token(request: Request):
    if COOKIE_NAME in request.cookies:
        return {"token": request.cookies[COOKIE_NAME]}


@app.get("/items/")
async def read_items(token: str = Depends(oauth2_scheme)):
    return {"token": token}


origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    os.environ.get("CORS_HOST", "http://localhost:3001"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# PostgreSQL endpoints
app.include_router(psql_restaurants.router)
# app.include_router(psql_hours.router)
app.include_router(psql_pictures.router)
app.include_router(psql_categories.router)
app.include_router(psql_locations.router)
app.include_router(psql_reviews.router)
app.include_router(psql_users.router)
