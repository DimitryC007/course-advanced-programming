
from sql_app.db_connection import *

def getTodo(id):
    db_context = DbContext()
    cursor = db_context.get_cursor()
    
    sql_select_query = """SELECT * FROM Todos WHERE TodoID = %s""" 
    # set variable in query
    cursor.execute(sql_select_query, (id,))
    # fetch result
    record = cursor.fetchall()

    # for row in record:
    #     print("TodoID = ", row[0], )
    #     print("Title = ", row[1])
    #     print("CreateDate = ", row[2])
    #     print("ModifiedDate  = ", row[3], "\n")
    return record