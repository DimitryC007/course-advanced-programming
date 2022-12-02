
from fastapi import APIRouter
from app.models.requests.todo_create_model import ToDoCreateModel
import httpx


router = APIRouter(
    prefix="/todo",
    tags=["Todo"],
    responses={404: {"Todo": "Not found"}},
)

BASE_URL = "http://todoservice:8001"

@router.post("/create")
async def create(todo: ToDoCreateModel):
    async with httpx.AsyncClient() as client:
        response = await client.post(f'{BASE_URL}/create',data=todo.json() ,content="application/json")
        return response.json()

@router.delete("/{id}")
async def delete(id):
    async with httpx.AsyncClient() as client:
        response = await client.delete(f'{BASE_URL}/{id}')
        return response.json()

@router.get("/")
async def get():
    async with httpx.AsyncClient() as client:
        response = await client.get(BASE_URL)
        return response.json()


@router.put("/setCompleted")
async def setCompleted(id:int,completed:bool):
    async with httpx.AsyncClient() as client:
        response = await client.put(f'{BASE_URL}/setCompleted?id={id}&completed={completed}')
        return response.json()