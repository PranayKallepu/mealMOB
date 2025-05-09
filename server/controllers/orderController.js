const Order = require("../models/Order");

// Create new order
const createOrder = async (req, res) => {
  try {
    const { items, address, total, restaurantId } = req.body;

    // Validate required fields
    if (!items || !address || !total || !restaurantId) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: items, address, total, or restaurantId",
      });
    }

    // Validate address fields
    const requiredAddressFields = [
      "receiverName",
      "mobile",
      "houseNumber",
      "city",
      "state",
      "pincode",
    ];
    const missingFields = requiredAddressFields.filter(
      (field) => !address[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required address fields: ${missingFields.join(", ")}`,
      });
    }

    const newOrder = new Order({
      userId: req.user.id,
      restaurantId,
      items,
      address,
      total,
      status: "pending",
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

//Get order by id
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate("restaurantId", "name")
      .populate("userId", "name");
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "No order found" });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("GetOrderById Error:", error);
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
    if (
      !["pending", "in progress", "delivered", "cancelled"].includes(status)
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status value" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      {
        status,
        updatedAt: new Date(),
      },
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
      updatedAt: order.updatedAt,
    });
  } catch (error) {
    console.error("UpdateOrderStatus Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error! Please try again later.",
    });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.orderId);
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    res.status(200).json({ success: true, message: "Order deleted" });
  } catch (error) {
    console.error("DeleteOrder Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error! Please try again later.",
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
};
