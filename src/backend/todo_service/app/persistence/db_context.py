import mysql.connector

class DbContext:

    def __init__(self):
        self.connection = None
        self.cursor = None
        self.__create_connection()

    def __del__(self):
            if self.connection.is_connected():
                self.connection.close()
                self.cursor.close()
                print("MySQL connection is closed")    

    def get_cursor(self):
        return self.cursor

    def get_connection(self):
        return self.connection

    def __create_connection(self):
        try:
            self.connection = mysql.connector.connect(
                host="mysql",
                password="admin",
                user="root",
                port="3306",
                database="TodoDB"
            )
            self.cursor = self.connection.cursor(dictionary=True)
            print("Connection to MySQL DB successful")
        except Exception as e:
            print(f"The error '{e}' occurred")
        

