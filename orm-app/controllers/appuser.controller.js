var Appusers = require("../models/appuser");

exports.get = function(req, res, next) {
  Appusers.find(function(err, users) {
    if (err) return next(err);
    res.render("users", {
      users: users
    });
  });
};
