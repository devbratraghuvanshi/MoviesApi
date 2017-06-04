
var express = require("express");
var moviesController = require("./../controller/moviesController");


var moviesRouter = express.Router();

moviesRouter.route("").get(moviesController.get).post(moviesController.add)

module.exports = moviesRouter;