import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Show from './Components/Show'
function App() {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="" element={<Home />} />
      <Route path="/hello/:word" element={<Show />} />
    </Routes>
  )
}

export default App
