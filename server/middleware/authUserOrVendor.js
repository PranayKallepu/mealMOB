const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Vendor = require("../models/Vendor");

const authUserOrVendor = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Access Denied. No Token Provided" });
    }

    // Remove "Bearer " prefix and verify token
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );

    if (!decoded || !decoded.id) {
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }

    // First, check if the ID exists in Vendor collection
    const vendor = await Vendor.findById(decoded.id);
    if (vendor) {
      req.vendor = vendor; // ✅ Store vendor info in request
      return next();
    }

    // If not found in Vendor, check User collection
    const user = await User.findById(decoded.id);
    if (user) {
      req.user = user; // ✅ Store user info in request
      return next();
    }

    return res
      .status(401)
      .json({ success: false, message: "Unauthorized Access" });
  } catch (error) {
    console.error("Auth Error: ", error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "Token expired" });
    }
    res.status(401).json({ success: false, message: "Unauthorized Access" });
  }
};

module.exports = authUserOrVendor;
