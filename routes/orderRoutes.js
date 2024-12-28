const express = require("express");
const { createOrder, successOrder } = require("../controller/orderController");

const router = express.Router();

router.post("/create", createOrder);
router.post("/success", successOrder);

module.exports = router;
