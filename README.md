# Todo Application
This is a Todo application that allows users to add, remove, and complete Todos. The Todos can also have inner items. The application is built with a microservices architecture, using FastAPI and Python on the server side, and React on the client side. The database used is MySql.


## Features
- Add Todo
- Add Todo inner items
- Remove Todo
- Complete Todo

## Technology Stack
- Server: FastAPI, Python, MySql
- Client: React

## Microservices Architecture
The Todo application is built with microservices architecture.

Client: This represents the client-side of the Todo application, which is built with React.
ApiGateway: This is the API Gateway that sits between the client and the Todo Service. It routes requests from the client to the Todo Service and vice versa.
Todo Service: This is the Todo Service that handles all requests related to Todos. It communicates with the MySql DB to store and retrieve data.
MySql DB: This is the MySql database that stores the data for the Todo application.

containers:
- ApiGateway
- MySql DB
- Todo Service

## Diagram
                              +------------+
                              |  Client    |
                              +------------+
                                     |
                                     | HTTP
                                     |
                              +------------+
                              | ApiGateway |
                              +------------+
                                     |
                                     | HTTP
                                     |
                              +------------+
                              | Todo Service |
                              +------------+
                                     |
                                     | SQL
                                     |
                              +------------+
                              |  MySql DB  |
                              +------------+


## Docker
The Todo application is built with Docker and Docker Compose. The following Docker files are included:
- Dockerfile for the ApiGateway
- Dockerfile for the Todo Service
- Dockerfile for the MySql DB
- Dockerfile for the React 

## Getting Started
### Installing
1. Clone the repository
2. Navigate to the project directory
3. Build the Docker images using "docker-comose up" command
4. Run the containers

## Usage
1. Open a web browser and go to http://localhost:3000
2. Use the Todo application


## Credits
- https://github.com/DimitryC007

