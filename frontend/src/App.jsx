import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAuth from './components/Auth/loginAuth';
import LoginSignup from './components/Signup/loginSignup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAuth />} />
        <Route path="/signup" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
