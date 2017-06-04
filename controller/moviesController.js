
var Movie = require("./../models/moviesModel")

var get = function(req, res){
   Movie.find(function(error,movies){
       if (error) {
           res.status(500);
           res.send("internal server error");  
       } else {
           res.status(200);
           res.send(movies);
       }
   });
};

var add = function(req, res){

    var movie = new Movie(req.body)
 console.log(movie);

   movie.save(function(error){
       if (error) {
           res.status(500);
           res.send("internal server error");  
       } else {
           res.status(200);
           res.send(movie);
       }
   });
}


var getById = function(req, res){
   Movie.findById(req.params.id,function(error,movie){
       if (error) {
           res.status(500);
           res.send("internal server error");  
       } else {
           res.status(200);
           res.send(movie);
       }
   });
};
// module.exports.get = get;
// module.exports.add =add;

module.exports = {
    get :get,
    add :add,
    getById: getById
};