import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Welcome at Home page</h1>
      <p>
        <Link to="/about">about</Link>
      </p>
    </div>
  )
}

export default Home
