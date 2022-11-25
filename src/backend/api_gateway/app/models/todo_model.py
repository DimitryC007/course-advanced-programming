from pydantic import BaseModel
from typing import Union, List, Optional
from models.todo_item_model import ToDoItemModel 
from datetime import datetime

class ToDoModel(BaseModel):
    title: Optional[str]
    create_date: Optional[datetime]
    modified_date: Optional[datetime]
    items:Union[List[ToDoItemModel],None] = None