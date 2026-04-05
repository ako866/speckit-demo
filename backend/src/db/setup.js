const Database = require('better-sqlite3');
const path = require('path');

// Determine the path to the SQLite file
// Using an environment variable or falling back to a default db file in the project
const dbPath = process.env.DB_PATH || path.join(__dirname, '..', '..', 'app.db');

// Setup the database instance
const db = new Database(dbPath, { 
    verbose: process.env.NODE_ENV === 'development' ? console.log : null 
});

// Configure pragmas for better SQLite performance and foreign key enforcement
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

module.exports = db;
