import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Signup from './screens/Signup.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  
  );
}
export default App;
