var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var resturantsSchema = new Schema({
  name: String,
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
var resturants = mongoose.model("resturants", resturantsSchema, resturants);
module.exports = resturants;
