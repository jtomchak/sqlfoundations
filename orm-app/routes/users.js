var express = require("express");
var userRouter = express.Router();
var usersController = require("../controllers/appuser.controller");
// import usersController from "../controllers/appuser.controller";

/* GET users listing. */
userRouter.route("/").get(usersController.get);

module.exports = userRouter;
