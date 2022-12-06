
from app.persistence.db_context import *
from app.models.requests.todo_create_model import ToDoCreateModel
from app.models.responses.todo_response_model import ToDoModel,ToDoItem
from datetime import datetime
from typing import List

def getTodos():
    db_context = DbContext()
    cursor = db_context.get_cursor()
    # sql parent query
    sql_select_parent_query = "SELECT * FROM Todos"
    cursor.execute(sql_select_parent_query)
    records = cursor.fetchall()
    sql_select_child_query = "SELECT * FROM TodoItems WHERE TodoID = %s"
    todos = list()
    for parentItem in records:
        parentTodo = ToDoModel()
        parentTodo.items = list()
        parentTodo.id = parentItem["TodoID"]
        parentTodo.title = parentItem["Title"]
        parentTodo.createDate = parentItem["CreateDate"]
        parentTodo.modifiedDate = parentItem["ModifiedDate"]
        # sql child query
        cursor.execute(sql_select_child_query,(parentItem["TodoID"],))
        childsRecords = cursor.fetchall()

        for childItem in childsRecords:
            childTodo = ToDoItem()
            childTodo.id = childItem["TodoItemID"]
            childTodo.text = childItem["ItemText"]
            childTodo.completed = childItem["Completed"]
            parentTodo.items.append(childTodo)
        todos.append(parentTodo)

    return todos

def deleteTodo(id):
    db_context = DbContext()
    cursor = db_context.get_cursor()
    connection = db_context.get_connection()
    # sql delete qeury 
    sql_delete_query = "DELETE FROM Todos WHERE TodoID = %s"
    cursor.execute(sql_delete_query,(id,))
    connection.commit()

    return cursor.rowcount > 0


def createTodo(todo:ToDoCreateModel):
    db_context = DbContext()
    cursor = db_context.get_cursor()
    connection = db_context.get_connection()

    dateTimeNow = datetime.utcnow()
    # sql query 
    sql_insert_parent_query = "INSERT INTO Todos(Title,CreateDate) VALUES(%s, %s)"
    sql_insert_parent_values = (todo.title, dateTimeNow.strftime('%Y-%m-%d %H:%M:%S'))
    # insert parent
    cursor.execute(sql_insert_parent_query, sql_insert_parent_values)
    connection.commit()
    todo.id = cursor.lastrowid
    #insert childs
    sql_insert_childs_values = []
    for item in todo.items:
        sql_insert_childs_values.append((item.text,item.completed,todo.id))

    sql_insert_childs_query = "INSERT INTO TodoItems(ItemText,Completed,TodoID) VALUES(%s, %s, %s)"
    cursor.executemany(sql_insert_childs_query,sql_insert_childs_values)
    connection.commit()

    sql_select_child_query = "SELECT * FROM TodoItems WHERE TodoID = %s"
    cursor.execute(sql_select_child_query,(todo.id,))
    childsRecords = cursor.fetchall()
    todoChilds = list()
    for childItem in childsRecords:
        childTodo = ToDoItem()
        childTodo.id = childItem["TodoItemID"]
        childTodo.text = childItem["ItemText"]
        childTodo.completed = childItem["Completed"]
        todoChilds.append(childTodo)
    
    todo.items = todoChilds    
    
    return todo

def setCompleted(id , completed):
    db_context = DbContext()
    cursor = db_context.get_cursor()
    connection = db_context.get_connection()
    completedBit = 1 if completed else 0
    # sql update qeury
    sql_update_completed_query = "UPDATE TodoItems SET Completed = %s WHERE TodoItemID = %s"
    cursor.execute(sql_update_completed_query,(completedBit,id))
    connection.commit()

    return True