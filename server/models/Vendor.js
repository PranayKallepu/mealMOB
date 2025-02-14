const mongoose = require("mongoose");
const Restaurant = require("./Restaurant");

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  vendorEmail: {
    type: String,
    required: true,
    unique: true,
  },
  vendorPassword: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    unique: true,
  },
});

module.exports = mongoose.model("Vendor", vendorSchema);
