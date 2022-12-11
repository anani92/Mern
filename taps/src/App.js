import React, { useState } from 'react'
import './App.css'
import Container from './components/Container'
function App() {
  const [tabs, setTabs] = useState([1, 2, 3])

  return (
    <div className="App">
      <Container tabs={tabs} />
    </div>
  )
}

export default App
