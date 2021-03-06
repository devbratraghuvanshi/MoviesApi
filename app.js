var express = require("express");
var moviesRouter = require("./routes/moviesRouter");
var mongoose = require("mongoose");
var bodyParser = require("body-parser"); //
var jsonParser = bodyParser.json({ type: 'application/json'});
var db = mongoose.connect("mongodb://localhost/MoviesDB");

var app = express();
// configure the app to use bodyParser()
app.use(jsonParser);

app.listen(3000,function(){
     console.log("server is running on:");
    console.log("http://localhost:3000/");
    console.log("to open in browser Ctr + click on it");
});

app.use("/movies",moviesRouter);