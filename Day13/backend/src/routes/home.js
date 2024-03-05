const routes = require("express").Router();
const homeController = require("../controllers/home")

routes.get("/", homeController.homeRoute)

module.exports = routes;