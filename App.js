const express = require("express");
const cors = require("cors");
const dotenv = require("./config/dotenv");
const connectDB = require("./config/dbConnection");
const restaurantRoutes = require("./routes/restaurantsRoutes");
const orderRoutes = require("./routes/orderRoutes")

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/api", restaurantRoutes);
app.use("/order", orderRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
