import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import './App.css'


function App() {
    
  return (
    <>
      <div>
        <NavBar /> 
        {} 
      
    </div>

    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    </>
  );
}

export default App
