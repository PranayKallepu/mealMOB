const Vendor = require("../models/Vendor");
const Restaurant = require("../models/Restaurant");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const vendorRegister = async (req, res) => {
  try {
    const { vendorName, vendorEmail, vendorPassword } = req.body;

    // check if vendorEmail already exists
    const existingVendor = await Vendor.findOne({ vendorEmail });
    if (existingVendor) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

     // Delete vendor if before any restaurant is null 
    await Vendor.findOneAndDelete({ restaurant: null });

    // hash password
    const hashedPassword = await bcrypt.hash(vendorPassword, 10);

    // create new vendor
    const newVendor = await Vendor.create({
      vendorName,
      vendorEmail,
      vendorPassword: hashedPassword,
    });
    await newVendor.save();

    // return response
    return res
      .status(200)
      .json({
        success: true,
        vendorName,
        message: "Vendor registered successfully",
      });
  } catch (error) {
    console.error("Vendor Register Error: ", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error. Please try again later",
      });
  }
};

const vendorLogin = async (req, res) => {
  try {
    const { vendorEmail, vendorPassword } = req.body;
    // check if vendorEmail exists
    const vendor = await Vendor.findOne({ vendorEmail });
    if (!vendor) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }
    const isPasswordMatch = await bcrypt.compare(
      vendorPassword,
      vendor.vendorPassword
    );
    // check password
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }
    // generate token
    const payload = { id: vendor._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Check if a restaurant is linked to the vendor
    const restaurant = await Restaurant.findOne({ vendor: vendor._id });
    
    // return response
    return res
      .status(200)
      .json({
        success: true,
        vendorId: vendor._id,
        vendorName: vendor.vendorName,
        restaurantId: restaurant ? restaurant._id : null,
        message: "Vendor logged in successfully",
        token,
      });
  } catch (error) {
    console.error("Vendor Login Error: ", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error. Please try again later",
      });
  }
};

module.exports = { vendorRegister, vendorLogin };
