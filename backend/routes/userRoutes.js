const express = require('express');
const { 
    getUsers, 
    getUserById, 
    updateUser, 
    deleteUser 
} = require('../controllers/userController');
const { protect, admin } = require('../controllers/authController');
const router = express.Router();

// @desc Get all users (Admin)
// @route GET /api/users
router.route('/')
    .get(protect, admin, getUsers);

// @desc Get, update, or delete a single user by ID (Admin)
// @route GET /api/users/:id
router.route('/:id')
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser);

module.exports = router;
