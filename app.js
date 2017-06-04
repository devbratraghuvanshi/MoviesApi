var express = require("express");

var app = express();

app.listen(3000,function(){
     console.log("server is running on:");
    console.log("http://localhost:3000/");
    console.log("to open in browser Ctr + click on it");
});

var moviesRouter = express.Router();

moviesRouter.route("")
.get(function(req, res){
    res.send("list of movies");
});

app.use("/movies",moviesRouter);