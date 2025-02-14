const Restaurant = require('../models/Restaurant')
const Vendor = require('../models/Vendor')

// add new restaurant
const addRestaurant = async (req, res) => {
    try {
        const { restaurantName, rating, offer, area, category, cuisines, vendorId } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Restaurant image is required" });
        }

        const restaurantImage = req.file.path; // ✅ Use Multer's `req.file.path`

        // Check if vendor exists
        const vendor = await Vendor.findById(vendorId);
        if (!vendor) return res.status(404).json({ success: false, message: "Vendor not found" });

        // Check if vendor already has a restaurant
        const existingRestaurant = await Restaurant.findOne({ vendor: vendorId });
        if (existingRestaurant) return res.status(400).json({ success: false, message: "Vendor already added a restaurant" });

        // Create new restaurant
        const newRestaurant = new Restaurant({
            restaurantName,
            restaurantImage, 
            rating,
            offer,
            area,
            category,
            cuisines,
            vendor: vendorId
        });

        await newRestaurant.save();

        // Link restaurant to vendor
        vendor.restaurant = newRestaurant._id;
        await vendor.save();

        res.status(201).json({ success: true, restaurantId: newRestaurant._id, message: "Restaurant added successfully", restaurant: newRestaurant });
    } catch (error) {
        console.error("AddRestaurant Error: ", error);
        res.status(500).json({ success: false, message: "Internal Server Error! Please try again later." });
    }
};

//get restaurants with 
const getRestaurants = async (req, res) => {
    try {
        // Use the filter object from middleware
        const restaurants = await Restaurant.find(req.filter);
        res.status(200).json({ success: true, filteredRestaurants: restaurants });
    } catch (error) {
        console.error("Get Restaurants: ", error);
        res.status(500).json({ success: false, message: "Internal Server Error! Please try again later." });
    }

};

//get restaurants by cuisine
const getRestaurantsByCuisine = async (req, res) => {
    try {
        // Use the filter object from middleware
        const restaurants = await Restaurant.find(req.filter);
        res.status(200).json({ success: true, restaurantsByCuisine: restaurants });
    } catch (error) {
        console.error("Get Filtered Restaurants By Cuisine: ", error);
        res.status(500).json({ success: false, message: "Internal Server Error! Please try again later." });
    }
};

// update restaurant
const updateRestaurant = async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const updateData = req.body; // Get the fields to update

        // Fetch the current restaurant details
        const existingRestaurant = await Restaurant.findById(restaurantId);
        if (!existingRestaurant) {
            return res.status(404).json({ success: false, message: "Restaurant not found" });
        }

        // Merge existing data with new updates
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            restaurantId,
            { $set: updateData }, // Only update provided fields
            { new: true } // Return updated document
        );

        res.status(200).json({ 
            success: true, 
            message: "Restaurant updated successfully", 
            previousData: existingRestaurant, // Show previous details
            updatedRestaurant 
        });

    } catch (error) {
        console.error("UpdateRestaurant Error: ", error);
        res.status(500).json({ success: false, message: "Internal Server Error! Please try again later." });
    }
};


module.exports = {addRestaurant, getRestaurants, getRestaurantsByCuisine, updateRestaurant};

