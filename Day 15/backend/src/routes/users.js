const routes = require("express").Router();
const { getUsers, signUpAcct, loginAcct } = require("../controllers/users")
const { auth } = require("../middleware/auth")

// Get Request
routes.get("/", getUsers);

// Create User
routes.post("/signup", signUpAcct);

// Login User
routes.post("/login", auth, loginAcct);

// Logout User
// routes.get("/logout", validation.authCheck, userController.userLogout)

module.exports = routes;