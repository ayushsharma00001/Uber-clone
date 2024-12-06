const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();
const {query,body} = require("express-validator");
const rideController = require("../controllers/ride.controller.js");

router.post("/create",[
    authMiddleware.authUser,
    body("pickup").isString().isLength({min:3}).withMessage("Invalid address"),
    body("destination").isString().isLength({min:3}).withMessage("Invalid Destination address"),
    body("vehicleType").isString().isIn(["auto","car","moto"]).withMessage("Provide vehicleType")
],rideController.createRide);


router.get("/get-fare",[
    authMiddleware.authUser,
    query("pickup").isString().isLength({min:3}).withMessage("Invalid pickup address"),
    query("destination").isString().isLength({min:3}).withMessage("Invalid Destination address"),
],rideController.getFare);


router.post("/confirm",[
    authMiddleware.authCaptain,
    body("rideId").isMongoId().withMessage("Invalid ride id"),
],rideController.confirmRide);


router.get("/start-ride",authMiddleware.authCaptain,[
    query("rideId").isMongoId().withMessage("Invalid ride is..."),
    query("otp").isString().isLength({min:6, max:6}).withMessage("Invalid OTP")
],rideController.startRide);


router.post("/end-ride",authMiddleware.authCaptain,[
    body("rideId").isMongoId().withMessage("Invalid ride id")
],rideController.endRide);



module.exports = router;