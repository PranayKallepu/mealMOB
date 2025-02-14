const mongoose = require('mongoose');

const filterRestaurants = (req, res, next) => {
    try {
        const { sort_by, search, rating, cuisine} = req.query;
        let filter = {};

        // Filter by category (sort_by)
        if (sort_by) {
            filter.category = sort_by;
        }

        // Search by restaurant name (case-insensitive)
        if (search) {
            filter.restaurantName = { $regex: search, $options: 'i' };
        }

        // Filter by rating (greater than or equal)
        if (rating) {
            const ratingNumber = parseFloat(rating);
            if (!isNaN(ratingNumber)) {
                filter.rating = { $gte: ratingNumber };
            }
        }

        // Filter by cuisine
        if (cuisine) {
            filter.cuisines = { $regex: cuisine, $options: 'i' }; 
        }
        
        req.filter = filter;
        next();
    } catch (error) {
        console.log('Filter Restaurants Error: ', error);
        res.status(400).json({ success: false, message: "Invalid query parameters" });
    }
};

module.exports = {filterRestaurants};
