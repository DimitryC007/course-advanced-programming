from fastapi import APIRouter
from app.models.requests.todo_create_model import ToDoCreateModel
from app.service import todo_service

router = APIRouter(
    tags=["Todo service"],
    responses={404: {"Todo": "Not found"}},
)

@router.post("/create")
async def create(todo: ToDoCreateModel):
    return todo_service.createTodo(todo)

@router.delete("/{id}")
async def delete(id):
    return todo_service.deleteTodo(id)

@router.get("/")
async def get():
    return todo_service.getTodos()

@router.put("/setCompleted")
async def setCompleted(id:int,completed:bool):
    return todo_service.setCompleted(id,completed)

