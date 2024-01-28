import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RegisterPage from './pages/Registerpage';
import SignIn from './pages/Signup';

function App() { 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
