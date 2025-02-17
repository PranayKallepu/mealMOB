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
  "/add-restaurant",
  authVendor,
  upload.single("restaurantImage"),
  addRestaurant
);
restaurantRoutes.get(
  "/restaurants",
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
  "/update-restaurant/:restaurantId",
  authVendor,
  upload.single("restaurantImage"),
  updateRestaurant
);
restaurantRoutes.delete(
  "/delete-restaurant/:restaurantId",
  authVendor,
  deleteRestaurant
);

module.exports = restaurantRoutes;
