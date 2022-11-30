from pydantic import BaseModel
from typing import Union, List, Optional


class ToDoItem(BaseModel):
    text: Optional[str]
    completed: Optional[bool]
    id: Optional[int]

class ToDoModel(BaseModel):
    id:Optional[int] = None
    title: Optional[str]
    createDate:Optional[str]
    modifiedDate:Optional[str]
    items:Union[List[ToDoItem],None] = None

