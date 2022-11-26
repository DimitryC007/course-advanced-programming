FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=admin

COPY ./privileges.sql /docker-entrypoint-initdb.d/
COPY ./todo_db_create.sql /docker-entrypoint-initdb.d/

