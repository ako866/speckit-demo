const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { AppError } = require('../utils/errors');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

const generateTokenAndSetCookie = (res, user) => {
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET || 'super_secret_temporary_key_12345',
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  });
};

router.post('/register', async (req, res, next) => {
  try {
    const { email, password, role, adminSecret } = req.body;

    if (!email || !password) {
      throw new AppError('Email and password are required', 400);
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new AppError('Invalid email format', 400);
    }

    if (password.length < 8) {
      throw new AppError('Password must be at least 8 characters long', 400);
    }

    const existingUser = User.findByEmail(email);
    if (existingUser) {
      throw new AppError('Email is already registered', 400);
    }

    let assignedRole = 'USER';
    if (role === 'ADMIN') {
      const expectedSecret = process.env.ADMIN_SECRET || 'secret_admin_code';
      if (adminSecret !== expectedSecret) {
        throw new AppError('Invalid Admin Secret Code', 403);
      }
      assignedRole = 'ADMIN';
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const userId = User.create(email, passwordHash, assignedRole);

    res.status(201).json({
      success: true,
      user: { id: userId, email, role: assignedRole }
    });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new AppError('Please provide email and password', 400);
    }

    const user = User.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new AppError('Invalid email or password', 401);
    }

    generateTokenAndSetCookie(res, user);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      user: { id: user.id, email: user.email, role: user.role }
    });
  } catch (error) {
    next(error);
  }
});

router.post('/logout', (req, res) => {
  res.cookie('token', 'loggedout', {
    httpOnly: true,
    expires: new Date(Date.now() + 10 * 1000)
  });
  res.status(200).json({ success: true, message: 'Logged out successfully' });
});

router.get('/me', authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: { id: req.user.id, email: req.user.email, role: req.user.role }
  });
});

module.exports = router;
