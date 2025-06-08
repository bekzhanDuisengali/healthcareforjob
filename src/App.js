import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import MyDayPage from './pages/MyDayPage';
import DailyTipPage from './pages/DailyTipPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my-day" element={<MyDayPage />} />
        <Route path="/daily-tip" element={<DailyTipPage />} />
      </Routes>
    </Router>
  );
}

export default App;