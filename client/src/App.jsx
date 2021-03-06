import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//importing components
import HomePage from './screens/HomePage.js';
import Login from './screens/Login.js';
import AboutUs from './screens/AboutUs.js';
import SignUpDonorPage from './screens/SignUpDonorPage.js';
import SignUpMotherPage from './screens/SignUpMotherPage.js';
import MotherRequestPage from './screens/MotherRequestPage.js';
import NavBar from './components/NavBar';
import DonorRequestPage from './screens/DonorRequestPage.js';
import MotherProfilePage from './screens/MotherProfile.js';
import ViewProfile from './screens/ViewProfile.js';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/donor" element={<SignUpDonorPage />} />
        <Route path="/signup/mother" element={<SignUpMotherPage />} />
        <Route path="/requests/mother" element={<MotherRequestPage />} />
        <Route path="/requests/donor" element={<DonorRequestPage />} />
        <Route path="/profile/mother" element={<MotherProfilePage />} />
        <Route path="/viewmotherprofile/:_id" element={<ViewProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  
  );
}
export default App;
