import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Result from './Components/Result'
import Nav from './Components/Nav'
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":term/:id" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
