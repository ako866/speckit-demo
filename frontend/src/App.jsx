import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import MeetingRooms from './pages/MeetingRooms/MeetingRooms';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/meeting-rooms" element={<MeetingRooms />} />
            </Route>

            {/* Admin only example */}
            <Route element={<PrivateRoute requiredRole="ADMIN" />}>
              <Route path="/admin" element={<div className="p-8 text-center text-red-500 font-bold">Admin Only Area</div>} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
