
var moviesController = function (Movie) {
    var get = function (req, res) {
        Movie.find(function (error, movies) {
            if (error) {
                res.status(500);
                res.send("internal server error");
            } else {
                res.status(200);
                res.send(movies);
            }
        });
    };

    var add = function (req, res) {

        var movie = new Movie(req.body)

        movie.save(function (error) {
            if (error) {
                res.status(500);
                res.send("internal server error");
            } else {
                res.status(200);
                res.send(movie);
            }
        });
    }


    var getById = function (req, res) {
        Movie.findById(req.params.id, function (error, movie) {
            if (error) {
                res.status(500);
                res.send("internal server error");
            } else {
                res.status(200);
                res.send(movie);
            }
        });
    };

    var update = function (req, res) {
        Movie.findById(req.params.id, function (error, movie) {
            if (error) {
                res.status(500);
                res.send("internal server error");
            } else {
                movie.title = req.body.title;
                movie.gener = req.body.gener;
                movie.rating = req.body.rating;
                movie.isReleased = req.body.isReleased;

                movie.save(function (error) {
                    if (error) {
                        res.status(500);
                        res.send("internal server error");
                    } else {
                        res.status(200);
                        res.send(movie);
                    }
                });
            }
        });
    };

    var patch = function (req, res) {
        Movie.findById(req.params.id, function (error, movie) {
            if (error) {
                res.status(500);
                res.send("internal server error");
            } else {
                for (var key in req.body) {
                    movie[key] = req.body[key];
                }
                movie.save(function (error) {
                    if (error) {
                        res.status(500);
                        res.send("internal server error");
                    } else {
                        res.status(200);
                        res.send(movie);
                    }
                });
            }
        });
    };

    var del = function (req, res) {
        Movie.findById(req.body.id, function (error, movie) {
            if (error) {
                res.status(500);
                res.send("internal server error");
            } else {
                movie.remove(function (error) {
                    if (error) {
                        res.status(500);
                        res.send("internal server error");
                    } else {
                        res.status(204);
                        res.send("removed");
                    }
                });
            }
        });
    };
    return {
        get: get,
        add: add,
        getById: getById,
        update: update,
        patch: patch,
        del: del
    }

}




module.exports = moviesController;