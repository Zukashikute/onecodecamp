const routes = require("express").Router();
const getUsers = require("../controllers/users")

// Get Request
routes.get("/", getUsers)


module.exports = routes;