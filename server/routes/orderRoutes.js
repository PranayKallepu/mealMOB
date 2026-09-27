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
orderRoutes.post("/", authUser, createOrder);

// Get all orders for user
orderRoutes.get("/", authUserOrVendor, getAllOrders);

// Get order by ID
orderRoutes.get("/:orderId", authUserOrVendor, getOrderById);

// Update order status (vendor only)
orderRoutes.put("/status/:orderId", authUserOrVendor, updateOrderStatus);

// Delete order (vendor only)
orderRoutes.delete("/:orderId", authUserOrVendor, deleteOrder);

module.exports = orderRoutes;
