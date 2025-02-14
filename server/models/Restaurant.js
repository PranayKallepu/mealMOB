const mongoose = require('mongoose')
const { categoryEnum, cuisinesEnum } = require('../enum')

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true
    },
    restaurantImage: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    offer: {
        type: String
    },
    area: {
        type: String,
        required: true
    },
    //no need array 
    category: {
        type: [{
            type: String,
            required: true,
            enum: categoryEnum
        }]
    },
    cuisines: {
        type: [{
            type: String,
            required: true,
            enum: cuisinesEnum  
        }]
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        unique: true
    },
    foodItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
})

module.exports = mongoose.model('Restaurant', restaurantSchema)