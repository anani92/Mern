import logo from './logo.svg'
import './App.css'
import Main from './views/Main'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './views/Product'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  )
}

export default App
