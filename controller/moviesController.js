
var movie = require("./../models/moviesModel")

var get = function(req, res){
   movie.find(function(error,movies){
       if (error) {
           res.status(500);
           res.send("internal server error");  
       } else {
           res.status(200);
           res.send(movies);
       }
   });
}
module.exports = get;