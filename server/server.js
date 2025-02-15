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

//Allow both local and deployed frontend
const allowedOrigins = [
    "http://localhost:3000", 
    "https://mealmob-client.onrender.com"
];

// MIDDLEWARES
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization"
}));
// Handle Preflight (OPTIONS) Requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", allowedOrigins.join(", "));
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
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
