import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Mapa from './components/Mapa'
import MapaRuta from './components/MapaRuta'
import MapaConClusters from './components/MapaConClusters'
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
        <Route path="/mapa" element={<Mapa/>} />
        <Route path="/mapaRuta" element={<MapaRuta/>} />
        <Route path="/mapaCluster" element={<MapaConClusters/>} />
      </Routes>
    </div>
    </>
  );
}

export default App
