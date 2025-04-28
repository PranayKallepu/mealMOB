const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  items: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      foodName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      foodImage: {
        type: String,
        required: true,
      },
    },
  ],
  address: {
    receiverName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    houseNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    enum: ["pending", "in progress", "delivered"],
    default: "pending",
  },
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
