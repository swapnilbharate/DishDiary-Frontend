import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App
