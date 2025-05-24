# Task Manager

## Description

- Project created during the course: "NodeJS Tutorial and Projects Course" on Udemy;
- Project scope: basic task manager using concepts learned with a focus on the backend;
- The front-end is a simple UI, mostly for tests;
- Technology used: NodeJS, MongoDB.

## Instructions

- Ensure Node.js is installed (NPM is included by default).
- Create a MongoDB Atlas account and set up a new database.
  - Generate your database connection URI.
  - Add this URI to the `.env` file provided in the repository.
- Install project dependencies by running:

```bash
npm install
```

- Start the server and connect to the database with:

```bash
npm start
```

- By default, the server runs on `localhost:8000`. You can change this setting in `app.js`.

## REST API routes 

| METHOD | ROUTE             | DESCRIPTION     |
|--------|-------------------|-----------------|
| GET    | /api/v1/tasks     | get all tasks   |
| POST   | /api/v1/tasks     | create task     |
| GET    | /api/v1/tasks/:id | get single task |
| PATCH  | /api/v1/tasks/:id | update task     |
| DELETE | /api/v1/tasks/:id | delete task     |

## Dependencies

### Prod Dependencies

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

*start*:
- Runs nodemon app.js
- Loads environment variables using @dotenvx/dotenvx
- Starts the server with nodemon for live-reloading