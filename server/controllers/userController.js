const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body
        // validation
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        // check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists. Try Another" })
        }
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        // create new user
        const newUser = await User.create({username, email, password: hashedPassword})
        await newUser.save()
        // return response
        return res.status(200).json({success: true, message: 'User registered successfully'})
    } catch (error) {
        console.error('User Signup Error: ', error);
        res.status(500).json({success: false, message: 'Internal server error. Please try again later'})
    }
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body
        // validation
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        // check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" })
        }
        // check password
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: "Invalid password" })
        }
        //create token
        const payload = {id: user._id}
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'})
        // return response
        return res.status(200).json({success: true, username: user.username, message: 'User logged in successfully', token})
    } catch (error) {
        console.error('User Login Error: ', error);
        res.status(500).json({success: false, message: 'Internal server error. Please try again later'})
    }
}

module.exports = {signup, login}