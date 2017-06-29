// grab the things we need
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  firstname: String,
  lastname: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: Number
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Appuser = mongoose.model("Appuser", userSchema);

// make this available to our users in our Node applications
module.exports = Appuser;
