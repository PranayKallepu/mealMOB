const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dns = require("dns");

// DNS resolution fix for MongoDB Atlas SRV records
dns.setDefaultResultOrder("ipv4first");
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
  console.warn("Could not set DNS servers, proceeding with default.");
}

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    await mongoose.connect(uri);
    console.log(`MongoDB Connected!`);
  } catch (err) {
    console.error(`DB Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
