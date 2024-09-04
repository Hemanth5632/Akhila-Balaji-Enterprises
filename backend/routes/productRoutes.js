const express = require('express');
const { 
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController');
const { protect, admin } = require('../controllers/authController');
const router = express.Router();

// @desc Get all products
// @route GET /api/products
router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct);

// @desc Get, update, or delete a single product by ID
// @route GET /api/products/:id
router.route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

module.exports = router;
