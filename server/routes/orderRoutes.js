const express = require("express");
const authUser = require("../middleware/authUser");
const authUserOrVendor = require("../middleware/authUserOrVendor");
const { authVendor } = require("../middleware/authVendor");
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

const orderRoutes = express.Router();

// Create new order
orderRoutes.post("/orders", authUser, createOrder);

// Get all orders for user
orderRoutes.get("/all-orders", authUserOrVendor, getAllOrders);

// Get order by ID
orderRoutes.get("/order-details/:orderId", authUserOrVendor, getOrderById);

// Update order status (vendor only)
orderRoutes.put("/order-status/:orderId", authUserOrVendor, updateOrderStatus);

// Delete order (vendor only)
orderRoutes.delete("/delete-order/:orderId", authUserOrVendor, deleteOrder);

module.exports = orderRoutes;
