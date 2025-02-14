const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const vendorRoutes = require('./routes/vendorRoutes')
const restaurantRoutes = require('./routes/restaurantRoutes')
const foodRoutes = require('./routes/foodRoutes')
const userRoutes = require('./routes/userRoutes')

// config
dotenv.config()
connectDB()

// middlewares
app.use(cors())
app.use(bodyParser.json())

// static files
path.join(__dirname, "uploads")
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use('/api', restaurantRoutes)
app.use('/vendor', vendorRoutes)
app.use('/api', foodRoutes)
app.use('/', userRoutes)

// server
const PORT = process.env.PORT || 5000
app.listen(PORT,"0.0.0.0", () => console.log(`Server running on port ${PORT}`))
