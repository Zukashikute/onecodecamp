const routes = require("express").Router();
const booksController = require("../controllers/books")

// GET Requests (Read)
routes.get("/", booksController.getAllBooks)
routes.get("/:id", booksController.getSingleBook)

// POST Request (Create)
routes.post("/", booksController.createNewBook)

// PUT Request (Update)
routes.put("/:id", booksController.updateBook)

// DELETE Request (Delete)
routes.delete("/:id", booksController.deleteBook)


module.exports = routes;