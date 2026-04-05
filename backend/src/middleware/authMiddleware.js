const jwt = require('jsonwebtoken');
const { AppError } = require('../utils/errors');
const User = require('../models/userModel');

const authMiddleware = (req, res, next) => {
  try {
    // Check for token in cookies
    const token = req.cookies && req.cookies.token;
    
    if (!token) {
      throw new AppError('Not authenticated. Please log in.', 401);
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_temporary_key_12345');
    
    // Check if user still exists
    const currentUser = User.findById(decoded.id);
    if (!currentUser) {
      throw new AppError('The user belonging to this token no longer exists.', 401);
    }

    // Grant access to protected route
    req.user = currentUser;
    next();
  } catch (error) {
    // If jwt throws error it usually means invalid token
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
       return next(new AppError('Invalid or expired token. Please log in again.', 401));
    }
    next(error);
  }
};

module.exports = { authMiddleware };
