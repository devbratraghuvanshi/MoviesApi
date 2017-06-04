
var express = require("express");
var moviesController = require("./../controller/moviesController");


var moviesRouter = express.Router();

moviesRouter.route("")// movies router
.get(moviesController.get).post(moviesController.add);

moviesRouter.route("/:id")// movies router
.get(moviesController.getById);


module.exports = moviesRouter;