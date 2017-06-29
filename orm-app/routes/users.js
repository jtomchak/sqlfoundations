var express = require("express");
var router = express.Router();
var Appusers = require("../models/appuser");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Appusers.find(function(err, users) {
    if (err) return next(err);
    res.render("users", {
      users: users
    });
  });
});

module.exports = router;
