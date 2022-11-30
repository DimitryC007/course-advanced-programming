from pydantic import BaseModel
from typing import Union, List, Optional


class ToDoItem(BaseModel):
    text: Optional[str]
    completed: Optional[bool]

class ToDoCreateModel(BaseModel):
    id:Optional[int] = None
    title: Optional[str]
    items:Union[List[ToDoItem],None] = None

