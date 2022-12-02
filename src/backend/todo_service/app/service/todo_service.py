from app.persistence.repository import todo_repository
from app.models.requests.todo_create_model import ToDoCreateModel

def getTodos():
    return todo_repository.getTodos()

def createTodo(todo:ToDoCreateModel):
    return todo_repository.createTodo(todo)

def deleteTodo(id):
    return todo_repository.deleteTodo(id)

def setCompleted(id,completed):
    return todo_repository.setCompleted(id,completed)    