const express = require("express");
const upload = require("../middleware/multer");
const { authVendor } = require("../middleware/authVendor");
const { filterRestaurants } = require("../middleware/filterRestaurants");
const authUser = require("../middleware/authUser");
const authUserOrVendor = require("../middleware/authUserOrVendor");
const {
  addRestaurant,
  getRestaurants,
  getRestaurantsByCuisine,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

const restaurantRoutes = express.Router();

restaurantRoutes.post(
  "/",
  authVendor,
  upload.single("restaurantImage"),
  addRestaurant
);
restaurantRoutes.get(
  "/",
  authUserOrVendor,
  filterRestaurants,
  getRestaurants
);
restaurantRoutes.get(
  "/cuisines",
  authUser,
  filterRestaurants,
  getRestaurantsByCuisine
);
restaurantRoutes.put(
  "/:restaurantId",
  authVendor,
  upload.single("restaurantImage"),
  updateRestaurant
);
restaurantRoutes.delete(
  "/:restaurantId",
  authVendor,
  deleteRestaurant
);

module.exports = restaurantRoutes;
