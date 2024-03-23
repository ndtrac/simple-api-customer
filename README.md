# Simple Customer Management API

This is a simple RESTful API for managing customer data. It allows you to perform CRUD operations (Create, Read, Update, Delete) on customer records.

## Instructions

Follow these instructions to set up and use the API on your local machine:

### Installation

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone this repository or download the source code.

```bash
git clone https://github.com/your_username/simple-customer-api.git
```

1. Navigate into the project directory:
```bash
cd simple-customer-api
```

2. Install dependencies:
```bash
npm install
```

### Usage
Start the server:
```bash
node server.js
```

The server will start running at http://localhost:3000.

### Endpoints
#### - GET /api/customers: Retrieve all customers.
#### - POST /api/customers: Create a new customer.
#### - PUT /api/customers/:id: Update a customer by ID.
#### - PATCH /api/customers/:id: Partially update a customer by ID.
#### - DELETE /api/customers/:id: Delete a customer by ID.

### Example Requests
#### Create a Customer
```bash
POST /api/customers
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "address": "123 Main St, City, Country"
}
```
```bash
PUT /api/customers/1
Content-Type: application/json

{
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phone": "987-654-3210",
    "address": "456 Elm St, Town, Country"
}
```

DELETE /api/customers/1

## Authorization in Postman

To include the authorization token in your Postman requests, follow these steps:

1. Open Postman.

2. Select the request you want to add the authorization token to, or create a new request.

3. In the request editor, navigate to the "Headers" tab.

4. Click on the "Add Custom Header" button.

5. In the "Key" field, enter `Authorization`.

6. In the "Value" field, enter `Bearer your_auth_token`. Replace `your_auth_token` with your actual authentication token.

7. Click "Send" to execute the request with the added authorization token.


GET /api/customers

### Contributing
Contributions are welcome! Feel free to submit pull requests or open issues.

### License
This project is licensed under the MIT License.

