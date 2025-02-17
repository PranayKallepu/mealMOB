const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const { v2: cloudinary } = require("cloudinary");
const connectDB = require("./config/db");

//import Routes
const vendorRoutes = require("./routes/vendorRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const foodRoutes = require("./routes/foodRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// config
dotenv.config();

//db connection
connectDB();

// Middleware for CORS
const corsOptions = {
  origin: ["http://localhost:3000", "https://mealmob-client.onrender.com"],
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials (cookies, authentication headers)
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight OPTIONS request

// Body parser middleware for handling JSON
app.use(bodyParser.json());

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// routes
app.use("/api", restaurantRoutes);
app.use("/vendor", vendorRoutes);
app.use("/api", foodRoutes);
app.use("/", userRoutes);

// Server listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
