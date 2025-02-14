const express = require('express')

const {vendorRegister, vendorLogin} = require('../controllers/vendorController')

const vendorRoutes = express.Router()

vendorRoutes.post('/register', vendorRegister)
vendorRoutes.post('/login', vendorLogin)

module.exports = vendorRoutes