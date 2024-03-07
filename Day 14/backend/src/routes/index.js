const routes = require("express").Router();


routes.use("/", require("./home"));
routes.use("/api/posts/", require("./post"));
routes.use("/api/users/", require("./users"));
routes.use("/api/tickets/", require("./tickets"));
// routes.use("/api/contactus/", require("./contactus"));


module.exports = routes;