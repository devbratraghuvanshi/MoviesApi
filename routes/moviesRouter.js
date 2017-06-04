
var express = require("express");
var Movie = require("./../models/moviesModel")

var moviesController = require("./../controller/moviesController")(Movie);//passing movie as dependency injection 


var moviesRouter = express.Router();

moviesRouter.route("")// movies router
.get(moviesController.get)
.post(moviesController.add)
.delete(moviesController.del);

moviesRouter.route("/:id")// movies router
.get(moviesController.getById)
.put(moviesController.update)
.patch(moviesController.patch);


module.exports = moviesRouter;