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

foodRoutes.post(
  "/add-foodItem",
  authVendor,
  upload.single("foodImage"),
  addFoodItem
);
foodRoutes.get("/dishes", authUser, filterFoodItems, getDishes);
foodRoutes.get(
  "/restaurantItems/:restaurantId",
  authUserOrVendor,
  getFoodItemsByRestaurant
);
foodRoutes.delete("/delete-foodItem/:foodItemId", authVendor, deleteFoodItem);

module.exports = foodRoutes;
