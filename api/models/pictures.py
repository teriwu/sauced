from pydantic import BaseModel


class PictureIn(BaseModel):
    url: str


class PictureOut(BaseModel):
    id: int
    url: str


class PictureList(BaseModel):
    # page_count: int
    pictures: list[PictureOut]


class PictureDeleteOperation(BaseModel):
    result: bool
