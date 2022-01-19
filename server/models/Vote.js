var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Vote = new Schema({
  Id: String,
  user: {
    type: Schema.Types.ObjectId,
    refPath: "UserModel",
  },
  sujet: {
    type: Schema.Types.ObjectId,
    refPath: "SujetModel",
  },
  vote: Number,
});

module.exports = mongoose.model("user", Sujet);
