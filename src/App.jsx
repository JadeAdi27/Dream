import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Sign from './Components/Sign';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  
        <Route path="/login" element={<Sign />} /> {/* Sign component */}
      </Routes>
    </Router>
  );
}

export default App;
