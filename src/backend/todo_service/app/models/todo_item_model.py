from pydantic import BaseModel
from typing import Union,Optional

class ToDoItemModel(BaseModel):
    text: Optional[str]
    completed: Optional[bool]