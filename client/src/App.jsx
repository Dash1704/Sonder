import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Signup from './screens/Signup.js';
import Login from './screens/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  
  );
}
export default App;
