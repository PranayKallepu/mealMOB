const mongoose = require("mongoose");

const filterFoodItems = (req, res, next) => {
  try {
    const { sort_by, search } = req.query;
    let filter = {};

    // Filter by category (sort_by)
    if (sort_by) {
      filter.category = sort_by;
    }

    // Search by restaurant name (case-insensitive)
    if (search) {
      filter.foodName = { $regex: search, $options: "i" };
    }

    req.filter = filter;
    next();
  } catch (error) {
    console.log("Filter FoodItems Error: ", error);
    res
      .status(400)
      .json({ success: false, message: "Invalid query parameters" });
  }
};

module.exports = { filterFoodItems };
