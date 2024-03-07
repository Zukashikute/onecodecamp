const routes = require("express").Router();
const { createPost, getPost, updatePost, deletePost } = require("../controllers/post")


// Post Request
routes.post("/", createPost)

// Get Request
routes.get("/", getPost)

// Update Request
routes.put("/:id", updatePost)

// Update Request
routes.delete("/:id", deletePost)

module.exports = routes;