import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  let history = useNavigate()
  const [term, setTerm] = useState('people')
  const [id, setId] = useState('1')
  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setTerm(e.target.value)
  }
  const handleIdChange = (e) => {
    e.preventDefault()
    console.log(id, 'from id change')
    setId(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(term, id)
    history(`/${term}/${id}`)
  }
  return (
    <div>
      <nav>
        <h3>Search:</h3>
        <form action="" onSubmit={handleSubmit}>
          <select onChange={(e) => handleChange(e)}>
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <input type="number" value={id} onChange={(e) => handleIdChange(e)} />
          <input type="submit" value="Search" />
        </form>
      </nav>
    </div>
  )
}

export default Nav
