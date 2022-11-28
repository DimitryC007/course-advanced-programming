
from fastapi import APIRouter
from models.todo_model import ToDoModel
from service import todo_service
# # from datetime import datetime

router = APIRouter(
    tags=["Todo service"],
    responses={404: {"Todo": "Not found"}},
)

@router.get("/{todo_id}")
async def get(item_id):
    return todo_service.getTodo(item_id)

@router.post("/create")
async def create(todo: ToDoModel):
    return todo

@router.put("/update")
async def update(todo: ToDoModel):
    return todo

@router.delete("/{item_id}")
async def delete(item_id):
    return item_id