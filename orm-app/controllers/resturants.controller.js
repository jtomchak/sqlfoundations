var Resturants = require("../models/resturant");

exports.get = function(req, res, next) {
  Resturants.find({}).limit(10).exec(function(err, resturants) {
    if (err) return next(err);
    // res.render("resturants", {
    //   resturants: resturants
    // });
    res.send(resturants);
  });
};

exports.getDetails = function(req, res) {
  Resturants.findOne({ _id: req.params.id }, function(err, resturant) {
    if (err) return next(err);
    //JSON the results to make JADE happy.
    //return model isn't totally valid JSON :-/
    results = JSON.parse(JSON.stringify(resturant));
    res.render("resturantDetails", {
      resturant: results
    });
  });
};
