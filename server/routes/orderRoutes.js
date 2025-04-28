const express = require("express");
const authUser = require("../middleware/authUser");
const authUserOrVendor = require("../middleware/authUserOrVendor");
const { authVendor } = require("../middleware/authVendor");
const {
  createOrder,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const orderRoutes = express.Router();

// Create new order
orderRoutes.post("/orders", authUser, createOrder);

// Get all orders for user
orderRoutes.get("/all-orders", authUserOrVendor, getAllOrders);

// Update order status (vendor only)
orderRoutes.put("/order-status/:orderId", authVendor, updateOrderStatus);

module.exports = orderRoutes;
