import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Login from './screens/Login.js';
import SignUpDonorPage from './screens/SignUpDonorPage.js';
import SignUpMotherPage from './screens/SignUpMotherPage.js';
import RequestPage from './screens/RequestPage.js';
import HomePage from './screens/HomePage.js';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup/donor" element={<SignUpDonorPage />} />
        <Route path="/signup/mother" element={<SignUpMotherPage />} />
        <Route path="/requests" element={<RequestPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  
  );
}
export default App;
