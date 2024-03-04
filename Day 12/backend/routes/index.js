const routes = require("express").Router();


routes.use("/", require("./home"));
routes.use("/books", require("./books"));


module.exports = routes;