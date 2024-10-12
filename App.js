const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { RESTAURANTS_DETAILS } = require("./data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await mongoose.connection.db
      .collection("restaurants")
      .find()
      .toArray();
    res.json(restaurants);
  } catch (error) {
    res.status(500).send("Error fetching restaurants: " + error.message);
  }
});

app.get("/restaurant/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurantDetails = RESTAURANTS_DETAILS[restaurantId];
  res.send(restaurantDetails);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started on port " + process.env.PORT || 5000);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB" + err.message);
  });
