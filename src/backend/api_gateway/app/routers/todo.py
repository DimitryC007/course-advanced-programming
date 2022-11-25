from fastapi import APIRouter
from models.todo_model import ToDoModel
from models.todo_model import ToDoItemModel
from datetime import datetime

router = APIRouter(
    prefix="/todo",
    tags=["Todo"],
    responses={404: {"Todo": "Not found"}},
)

@router.get("/{todo_id}")
async def get_todo(item_id):
    todo = ToDoModel()
    todo.title = "dima here"
    todo.create_date = datetime.now()
    todo.items = []

    todo_item = ToDoItemModel()
    todo_item.completed = True
    todo_item.text = 'how much it will take to finish this'
    todo.items.append(todo_item)
    return todo

@router.post("/create")
async def create_todo(todo: ToDoModel):
    return todo

@router.put("/update")
async def update_todo(todo: ToDoModel):
    return todo

@router.delete("/{item_id}")
async def delete_todo(item_id):
    return item_id