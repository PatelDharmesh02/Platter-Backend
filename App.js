const express = require("express");
const cors = require("cors");
const { RESTAURANTS_DATA, RESTAURANTS_DETAILS } = require("./data");

const app = express();

app.use(cors());

app.get("/restaurants", (req, res) => {
  res.send(RESTAURANTS_DATA);
});

app.get("/restaurant/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurantDetails = RESTAURANTS_DETAILS[restaurantId];
  res.send(restaurantDetails);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
