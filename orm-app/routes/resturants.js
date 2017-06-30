var express = require("express");
var resturantsRouter = express.Router();
var resturantsController = require("../controllers/resturants.controller");
// import usersController from "../controllers/appuser.controller";

/* GET users listing. */
resturantsRouter.route("/").get(resturantsController.get);

module.exports = resturantsRouter;
