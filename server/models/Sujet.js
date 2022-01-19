var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Sujet = new Schema({
  Id: String,
  titre: String,
  description: String,
});

module.exports = mongoose.model("user", Sujet);
