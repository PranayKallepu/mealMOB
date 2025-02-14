const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    foodImage: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
})

module.exports = mongoose.model('Food', foodSchema)