const express = require('express');
const { registerUser, authUser, getUserProfile, updateUserProfile, protect, admin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
