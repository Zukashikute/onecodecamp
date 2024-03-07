const routes = require("express").Router();
const { createTickets, getTickets, updateTickets, deleteTickets } = require("../controllers/tickets")


// Post Request
routes.post("/", createTickets)

// Get Request
routes.get("/", getTickets)

// Update Request
routes.put("/:id", updateTickets)

// Update Request
routes.delete("/:id", deleteTickets)

module.exports = routes;