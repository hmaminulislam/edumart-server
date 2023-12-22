const express = require('express');
const { getProducts, getProduct } = require('./product.controller');
const router = express.Router()

// all products get
router.get('/products', getProducts)

// single product get by id
router.get('/product/:id', getProduct)

module.exports = router;