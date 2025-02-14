const Food = require('../models/Food')
const Restaurant = require('../models/Restaurant')

const addFoodItem = async (req, res) => {
  try {
    const { foodName, price, category, description, restaurantId } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Food image is required" });
    }
    
    const foodImage = req.file.path; 

    const newFoodItem = new Food({
      foodName,
      foodImage,
      price,
      category,
      description,
      restaurant: restaurantId,
    });

    await newFoodItem.save();
    res.status(201).json({ success: true, message: "Food item added successfully", food: newFoodItem });
  } catch (error) {
    console.error("AddFoodItem Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error! Please try again later." });
  }
};

// get dishes
const getDishes = async (req, res) => {
    try {
        const foodItems = await Food.find(req.filter)
        return res.status(200).json({success: true, filterDishes: foodItems})
    } catch (error) {
        console.error('Get Food Items: ', error);
        res.status(500).json({success: false, message: 'Internal server error. Please try again later'})
    }
}

// get all food items related to restaurant
const getFoodItemsByRestaurant = async (req, res) => {
    try {
        const {restaurantId} = req.params
        // check if restaurant exists
        const restaurant = await Restaurant.findById(restaurantId)
        if(!restaurant) {
            return res.status(404).json({success: false, message: 'Restaurant not found'})
        }
        // get all food items related to restaurant
        const foodItems = await Food.find({restaurant: restaurantId})
        return res.status(200).json({success: true, restaurant, foodItems})
    } catch (error) {
        console.error('Get Food Items: ', error);
        res.status(500).json({success: false, message: 'Internal server error. Please try again later'})
    }
}

// delete food item by id
const deleteFoodItem = async (req, res) => {
    try {
        const {foodItemId} = req.params
        // find food item by id
        const foodItem = await Food.findById(foodItemId)
        if(!foodItem) {
            return res.status(404).json({success: false, message: 'Food item not found'})
        }
        // delete food item
        await Food.findByIdAndDelete(foodItemId)
        return res.status(200).json({success: true, message: 'Food item deleted successfully'})
    } catch (error) {
        console.error('Delete Food Item: ', error);
        res.status(500).json({success: false, message: 'Internal server error. Please try again later'})
    }
}

module.exports = {addFoodItem, getDishes, getFoodItemsByRestaurant, deleteFoodItem}

