var express = require("express");
var resturantsRouter = express.Router();
var resturantsController = require("../controllers/resturants.controller");
// import usersController from "../controllers/appuser.controller";

/* GET resturants listing. */
resturantsRouter.route("/").get(resturantsController.get);

/* GET resturant deatils by id. */
resturantsRouter.route("/:id").get(resturantsController.getDetails);

module.exports = resturantsRouter;
