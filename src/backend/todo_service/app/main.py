from fastapi import FastAPI
from routers import master

app = FastAPI()

app.include_router(master.router)

@app.get("/")
def read_root():
    return {"Hello": "todoService"}


