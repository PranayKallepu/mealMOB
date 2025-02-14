const jwt = require('jsonwebtoken')
const Vendor = require('../models/Vendor')

const authVendor = async(req, res, next)=>{
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
        // check vendor exits or not
        const vendor = await Vendor.findById(verified.id)
        // console.log('verified Id: ', verified.id)
        if(!vendor){
            return res.status(401).json({success: false, message: 'Vendor not found'})
        }
        req.vendor = vendor
        next()
    } catch (error) {
        console.error('Auth Error: ', error);
        res.status(401).json({success: false, message: 'Unauthorized Access'})
    }
}

module.exports = {authVendor}