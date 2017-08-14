var Resturants = require("../models/resturant");

exports.get = function(req, res, next) {
  Resturants.aggregate(
    [
      {
        $match: { cuisine: "American" }
      },
      {
        $group: { _id: "$borough", count: { $sum: 1 } }
      }
    ],
    function(err, payload) {
      if (err) {
        next(err);
      } else {
        res.render("resturants", {
          bouroughs: payload
        });
      }
    }
  );

  exports.getByBorough = function(req, res, next) {
    res.render("index", { title: "I didn't mean it" });
  };
  // Resturants.find({}).limit(10).exec(function(err, payload) {
  //   if (err) return next(err);
  //   res.render("resturants", {
  //     resturants: payload
  //   });
  // });
};

// exports.getDetails = function(req, res) {
//   Resturants.findOne({ _id: req.params.id }, function(err, resturant) {
//     if (err) return next(err);
//     //JSON the results to make JADE happy.
//     //return model isn't totally valid JSON :-/
//     results = JSON.parse(JSON.stringify(resturant));
//     res.render("resturantDetails", {
//       resturant: results
//     });
//   });
// };
