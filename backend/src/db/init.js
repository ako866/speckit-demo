const db = require('./setup');

const initDb = () => {
  console.log('Initializing database tables...');
  
  // Create users table
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      passwordHash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'USER',
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  console.log('Database initialization complete.');
};

// If run directly via node
if (require.main === module) {
  initDb();
}

module.exports = initDb;
