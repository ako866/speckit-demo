const db = require('../db/setup');

const User = {
  create: (email, passwordHash, role = 'USER') => {
    const stmt = db.prepare('INSERT INTO users (email, passwordHash, role) VALUES (?, ?, ?)');
    const info = stmt.run(email, passwordHash, role);
    return info.lastInsertRowid;
  },

  findByEmail: (email) => {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email);
  },

  findById: (id) => {
    const stmt = db.prepare('SELECT id, email, role, createdAt FROM users WHERE id = ?');
    return stmt.get(id);
  }
};

module.exports = User;
