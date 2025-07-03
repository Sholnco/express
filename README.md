REST API with Express.js

This is a basic RESTful API built using Node.js and Express.js. It allows clients to perform CRUD operations (Create, Read, Update, Delete) on a collection of items.


Project Overview

The API exposes routes to:
a. Create an item
b. Retrieve all items or a single item by ID
c. Update an item by ID
d. Delete an item by ID

All data is stored in an in-memory array, and the API demonstrates key concepts of REST, Express middleware, error handling, and route structure.

Installation
1 Make sure you have Node.js installed.
2 Clone or download this project.
3 Navigate into the project directory in your terminal.
4 Run the following command to install dependencies:

```bash
npm install

Usage

1. Start the server:

```bash
node index.js

2. Open Postman or your browser to test the endpoints.
3. The API will run at:  
   `http://localhost:3000`

## 🔧 API Endpoints

| Method | Endpoint         | Description                 |
|--------|------------------|-----------------------------|
| GET    | `/items`         | Get all items               |
| GET    | `/items/:id`     | Get item by ID              |
| POST   | `/items`         | Create a new item           |
| PUT    | `/items/:id`     | Update an item by ID        |
| DELETE | `/items/:id`     | Delete an item by ID        |

Features

1. CRUD Operations – Full Create, Read, Update, and Delete support.
2. Validation – Ensures name and description fields are provided.
3. Error Handling – Graceful handling for invalid routes, missing data, and internal errors.
4. User Feedback – Returns clear and meaningful JSON responses.
5. Scalability-Ready – Can be scaled with database and modular structure in future.

Postman Testing Examples

1. GET All Items
Method: GET
URL: `http://localhost:3000/items`

2. GET Single Item
Method: GET
URL: `http://localhost:3000/items/1`

3. POST Create Item
Method: POST
URL: `http://localhost:3000/items`
Headers: `Content-Type: application/json`
Body:
```json
{
  "name": "Item Three",
  "description": "This is the third item"
}
```

4 PUT Update Item
Method: PUT
URL: `http://localhost:3000/items/1`
Headers: `Content-Type: application/json`
Body:
```json
{
  "name": "Updated Item",
  "description": "Updated description"
}
```

5 DELETE Item
Method: DELETE
URL: `http://localhost:3000/items/1`

---

Deployment

You can deploy this app using services like:
Render
Railway
Glitch
Vercel (with API Serverless functions)

Steps:
Push your code to GitHub
Connect repository on the deployment platform
Set start script: `node index.js`

Performance & Scalability Notes

For small apps, this performs well in-memory.
For production, replace in-memory array with a real database (MongoDB, PostgreSQL, etc).
Add validation libraries like Joi or express-validator for robustness.
You can modularize routes/controllers to improve maintainability.

Use the methods:
GET → http://localhost:3000/items
POST → http://localhost:3000/items with body
PUT → http://localhost:3000/items/1 with body
DELETE → http://localhost:3000/items/1
Make sure to set:
Headers → Content-Type: application/json
Body → raw JSON

Author

Developed by Matthew Olushola Oke