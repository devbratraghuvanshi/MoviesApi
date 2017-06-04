
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var moviesModel = new Schema({
    title :String,
    gener :String,
    rating: Number,
    isReleased:{type:Boolean, default:true}
});

module.exports = mongoose.model("Movie",moviesModel);