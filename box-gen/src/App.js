import React, { useState } from 'react'
import './App.css'
import BoxForm from './components/BoxForm'
import Container from './components/Container'
function App() {
  const [boxes, setBoxes] = useState([])

  return (
    <div className="App">
      <BoxForm boxes={boxes} updateBoxes={setBoxes} />
      <Container boxes={boxes} />
    </div>
  )
}

export default App
