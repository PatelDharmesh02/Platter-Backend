const mongoose = require("mongoose");

const { RESTAURANTS_DETAILS } = require("../data");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await mongoose.connection.db
      .collection("restaurants")
      .find()
      .toArray();
    res.json(restaurants);
  } catch (error) {
    res.status(500).send("Error fetching restaurants: " + error.message);
  }
};

const getRestaurantDetails = (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurantDetails = RESTAURANTS_DETAILS[restaurantId];
  res.send(restaurantDetails);
};

module.exports = {
  getRestaurants,
  getRestaurantDetails,
};
