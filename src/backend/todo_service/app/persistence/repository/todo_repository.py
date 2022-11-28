
from persistence.db_context import *

def getTodo(id):
    db_context = DbContext()
    cursor = db_context.get_cursor()

    # sql query 
    sql_select_query = """SELECT * FROM Todos WHERE TodoID = %s""" 
    # set variable in query
    cursor.execute(sql_select_query, (id,))
    # fetch result
    record = cursor.fetchall()
    
    return record