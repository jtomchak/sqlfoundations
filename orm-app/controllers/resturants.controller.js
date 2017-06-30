var Resturants = require("../models/resturant");

exports.get = function(req, res, next) {
  Resturants.find(function(err, resturants) {
    if (err) return next(err);
    res.render("resturants", {
      resturants: resturants
    });
  });
};
