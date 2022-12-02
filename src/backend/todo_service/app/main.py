from fastapi import FastAPI
from app.routers import master

app = FastAPI()

app.include_router(master.router)
