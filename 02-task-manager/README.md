# Task Manager

## Description

- Project created during the course: "NodeJS Tutorial and Projects Course" on Udemy.
- Project scope: basic task manager using concepts learned with a focus on the backend.
- Technology used: NodeJS, MongoDB.

## REST API routes 

| METHOD | ROUTE             | DESCRIPTION     |
|--------|-------------------|-----------------|
| GET    | /api/v1/tasks     | get all tasks   |
| POST   | /api/v1/tasks     | create task     |
| GET    | /api/v1/tasks/:id | get single task |
| PATCH  | /api/v1/tasks/:id | update task     |
| DELETE | /api/v1/tasks/:id | delete task     |

## Dependencies

### Dependencies

- @dotenvx/dotenvx (^1.44.1)
Loads environment variables from .env files.

- axios (^1.9.0)
Promise-based HTTP client for making HTTP requests.

- express (^4.17.1)
Web framework for Node.js, used for routing and middleware.

- mongoose (^8.15.0)
ODM (Object Data Modeling) library for MongoDB and Node.js.

### Dev Dependencies
- nodemon (^3.1.10)
Utility that automatically restarts the Node.js application when file changes are detected.

### Script Dependency Flow

start:
Runs nodemon app.js
Loads environment variables using @dotenvx/dotenvx
Starts the server with nodemon for live-reloading