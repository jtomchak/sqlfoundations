var express = require("express");
var resturantsRouter = express.Router();
var resturantsController = require("../controllers/resturants.controller");
// import usersController from "../controllers/appuser.controller";

/* GET resturants listing. */
resturantsRouter.route("/").get(resturantsController.get);

/* GET resturants by borough. */
resturantsRouter.get("/:borough", function(req, res, next) {
  var borough = req.params.borough;
  res.send("PLEASE WORK " + borough);
});

module.exports = resturantsRouter;
