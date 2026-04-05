const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./routes/api');
const authController = require('./api/authController');
const { errorHandler } = require('./utils/errors');
const { authMiddleware } = require('./middleware/authMiddleware');
const { requireRole } = require('./middleware/rbacMiddleware');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRoutes);
app.use('/api/auth', authController);

// Test Protected Route
app.get('/api/admin-only', authMiddleware, requireRole('ADMIN'), (req, res) => {
  res.json({ success: true, message: 'Welcome Admin!' });
});

app.use(errorHandler);

module.exports = app;
