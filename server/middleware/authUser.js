const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authUser = async(req, res, next)=>{
    try {
        const token = req.header('Authorization')
        if(!token){
            return res.status(401).json({success: false, message: 'Access Denied. No Token provided'})
        }
        // verify token
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET)
        if(!verified){
            return res.status(401).json({success: false, message: 'Invalid Token'})
        }
        // check user exits or not
        const user = await User.findById(verified.id)
        // console.log('verified Id: ', verified.id)
        if(!user){
            return res.status(401).json({success: false, message: 'User not found'})
        }
        req.user = user
        next()
    } catch (error) {
        console.error('Auth Error: ', error)
        res.status(401).json({success: false, message: 'Unauthorized Access'})
    }
}

module.exports = authUser