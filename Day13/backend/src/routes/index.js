const routes = require("express").Router();


routes.use("/", require("./home"));
routes.use("/api/posts/", require("./post"));


module.exports = routes;