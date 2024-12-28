const express = require("express");
const { getRestaurants, getRestaurantDetails } = require("../controller/restaurantsController");

const router = express.Router();

router.get("/restaurants", getRestaurants);
router.get("/restaurant/:id", getRestaurantDetails);

module.exports = router;
