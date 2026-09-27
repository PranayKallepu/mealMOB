const express = require("express");
const upload = require("../middleware/multer");
const { authVendor } = require("../middleware/authVendor");
const authUser = require("../middleware/authUser");
const { filterFoodItems } = require("../middleware/filterFoodItems");
const authUserOrVendor = require("../middleware/authUserOrVendor");
const {
  addFoodItem,
  getDishes,
  getFoodItemsByRestaurant,
  deleteFoodItem,
} = require("../controllers/foodController");

const foodRoutes = express.Router();

foodRoutes.post("/", authVendor, upload.single("foodImage"), addFoodItem);
foodRoutes.get("/", authUser, filterFoodItems, getDishes);
foodRoutes.get("/:restaurantId", authUserOrVendor, getFoodItemsByRestaurant);
foodRoutes.delete("/:foodItemId", authVendor, deleteFoodItem);

module.exports = foodRoutes;
