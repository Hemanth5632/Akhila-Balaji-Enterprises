const express = require('express');
const { 
    addOrderItems, 
    getOrderById, 
    updateOrderToPaid, 
    updateOrderToDelivered, 
    getMyOrders, 
    getOrders 
} = require('../controllers/orderController');
const { protect, admin } = require('../controllers/authController');
const router = express.Router();

// @desc Place a new order
// @route POST /api/orders
router.route('/')
    .post(protect, addOrderItems);

// @desc Get orders for logged-in user
// @route GET /api/orders/myorders
router.route('/myorders')
    .get(protect, getMyOrders);

// @desc Get all orders (Admin)
// @route GET /api/orders
router.route('/')
    .get(protect, admin, getOrders);

// @desc Get a single order by ID
// @route GET /api/orders/:id
router.route('/:id')
    .get(protect, getOrderById);

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
router.route('/:id/pay')
    .put(protect, updateOrderToPaid);

// @desc Update order to delivered
// @route PUT /api/orders/:id/deliver
router.route('/:id/deliver')
    .put(protect, admin, updateOrderToDelivered);

module.exports = router;
