const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();
const {body} = require("express-validator");
const rideController = require("../controllers/ride.controller.js");

router.post("/create",[
    authMiddleware.authUser,
    body("pickup").isString().isLength({min:3}).withMessage("Invalid address"),
    body("destination").isString().isLength({min:3}).withMessage("Invalid Destination address"),
    body("vehicleType").isString().isIn(["auto","car","moto"]).withMessage("Provide vehicleType")
],rideController.createRide);



module.exports = router;