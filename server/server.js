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

// List of allowed origins
const allowedOrigins = [
    "http://localhost:3000",
    "https://mealmob-client.onrender.com"
];
// CORS middleware to dynamically allow only one origin
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // Handle Preflight (OPTIONS request)
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});
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
const PORT = process.env.PORT || 4000
app.listen(PORT,"0.0.0.0", () => console.log(`Server running on port ${PORT}`))
