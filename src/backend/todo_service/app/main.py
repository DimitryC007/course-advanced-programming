from fastapi import FastAPI
from routers import master
import uvicorn

app = FastAPI()

app.include_router(master.router)

@app.get("/")
def read_root():
    return {"Hello": "todoService"}

if __name__ == '__main__':
    uvicorn.run(app,host='0.0.0.0',port=8000)

