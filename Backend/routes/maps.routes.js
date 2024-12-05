const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
const mapControllers = require("../controllers/maps.controller.js");

const { query } = require("express-validator");

router.get(
  "/get-coordinates",
  [
    query("address")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Provide Address..."),
  ],
  authMiddleware.authUser,
  mapControllers.getCoordinates
);


router.get("/get-distance-time",[
    query("origin")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Provide Origin..."),
    query("destination")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Provide Destination..."),
  ],mapControllers.getDistanceTime)


router.get("/get-suggestions",[
    query("input")
      .isString()
      .isLength({ min: 0 })
      .withMessage("Provide Input...")
  ],mapControllers.getAutoCompleteSuggestions)

module.exports = router;
