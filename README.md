# Task Manager API

Task Manager is an application that allows you to create as much as projects you want, permitting you to trace all steps to complete the defined project
____

# Dependencies

- MySQL (Configure on ./database/config/config.json)
- NodeJs - v12.13.1
- Docker

___

# Getting Started


- Clone Project

Docker: 
- On projects root run the following command: `docker-compose up --build`
- Server runs on 3000

Locally: 
- Install dependencies
- Run the following command: `npm run migrate`
- Start the API server by running: `npm start`
- Server runs on 3000
- Tests should be run locally
___

# EndPoints

## Auth

All possible endpoints for the auth service:

- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/logout`

## Users

All possible endpoints for the user service:

- `POST /users/:id?`

## Projects

All possible endpoints for the project service:

- `GET /projects/:id?`
- `POST /projects`
- `PUT /projects/:id`
- `DELETE /projects/:id`

## Tasks

All possible endpoints for the task service:

- `GET /tasks/:id?`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`
