import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import MeetingRooms from './pages/MeetingRooms/MeetingRooms';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meeting-rooms" element={<MeetingRooms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
