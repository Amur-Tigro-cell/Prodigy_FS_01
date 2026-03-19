const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/protected/dashboard
// @desc    Get user dashboard
// @access  Private
router.get('/dashboard', auth, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard',
    user: {
      id: req.user._id,
      email: req.user.email,
      role: req.user.role
    }
  });
});

// @route   GET /api/protected/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', auth, (req, res) => {
  res.json({
    message: 'User profile data',
    user: {
      id: req.user._id,
      email: req.user.email,
      role: req.user.role,
      createdAt: req.user.createdAt,
      lastLogin: req.user.lastLogin
    }
  });
});

// @route   GET /api/protected/admin
// @desc    Admin only route
// @access  Private (Admin only)
router.get('/admin', auth, adminAuth, (req, res) => {
  res.json({
    message: 'Admin dashboard',
    user: {
      id: req.user._id,
      email: req.user.email,
      role: req.user.role
    }
  });
});

module.exports = router;
