const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let customers = [];
let customerIdCounter = 0;

// Sample authorization token (replace this with your actual token handling logic)
const AUTH_TOKEN = "simple_auth";

// Middleware to check authorization
const authorize = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token !== `Bearer ${AUTH_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

// Apply authorization middleware to all routes
app.use(authorize);

// POST method to create a new customer
app.post("/api/customers", (req, res) => {
  const newCustomer = {
    id: customerIdCounter++,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// GET method to retrieve all customers
app.get("/api/customers", (req, res) => {
  res.json(customers);
});

// PUT method to update customer info by ID
app.put("/api/customers/:id", (req, res) => {
  const id = req.params.id;
  const updatedCustomer = {
    id: id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  };
  customers[id] = updatedCustomer;
  res.json(updatedCustomer);
});

// PATCH method to partially update customer info by ID
app.patch("/api/customers/:id", (req, res) => {
  const id = req.params.id;
  Object.assign(customers[id], req.body);
  res.json(customers[id]);
});

// DELETE method to delete customer by ID
app.delete("/api/customers/:id", (req, res) => {
  const id = req.params.id;
  const deletedCustomer = customers.find(
    (customer) => customer.id === parseInt(id)
  );
  customers = customers.filter((customer) => customer.id !== parseInt(id));
  res.json(deletedCustomer);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
