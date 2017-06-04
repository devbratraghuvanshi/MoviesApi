
var express = require("express");

var moviesRouter = express.Router();

moviesRouter.route("")
.get(function(req, res){
    res.send("list of movies");
});

module.exports = moviesRouter;