// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var EmployeeAssets = require('../models/employee_assets');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

EmployeeAssets.methods(['get', 'put', 'post', 'delete']);
EmployeeAssets.register(router, '/EmployeeAssets');


// Return router
module.exports = router;
