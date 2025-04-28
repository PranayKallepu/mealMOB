const Order = require("../models/Order");

// Create new order
const createOrder = async (req, res) => {
  try {
    const { items, address, total } = req.body;

    const newOrder = new Order({
      userId: req.user.id,
      restaurantId: items[0].restaurantId,
      items,
      address,
      total,
    });

    await newOrder.save();
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("CreateOrder Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error! Please try again later.",
    });
  }
};

// Get user orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .populate("restaurantId", "name")
      .populate("userId", "name");

    if (!orders) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found" });
    }

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("GetAllOrders Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error! Please try again later.",
    });
  }
};

// Update order status (vendor only)
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    // Validate status
    if (!["pending", "in progress", "delivered"].includes(status)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status value" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status },
      { new: true }
    );

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error("UpdateOrderStatus Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error! Please try again later.",
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrderStatus,
};
