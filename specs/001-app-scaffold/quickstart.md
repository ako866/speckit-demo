# Quickstart

## Prerequisites
- **Node.js**: v20 or later installed on the system.
- **PostgreSQL (Optional)**: If you intend to start building out data models immediately, ensure Postgres is running on default port `5432`.

## Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The backend will be available at `http://localhost:3001`.*

## Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   *The frontend will automatically open in your browser at `http://localhost:3000`.*
   *Verify that you see the initial layout, and check the network tab or console to confirm it successfully hit the backend health endpoint.*
