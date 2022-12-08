import './App.css'
import React from 'react'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Main from './Components/Main'

export default function App() {
  return (
    <div className="app">
      <Header />
      <div style={{ display: 'flex' }}>
        <Navigation />
        <Main />
      </div>
    </div>
  )
}
