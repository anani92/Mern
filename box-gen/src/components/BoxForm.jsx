import React, { useState } from 'react'

const BoxForm = (props) => {
  const [color, setColor] = useState('')
  const handleColorChange = (e) => {
    setColor(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(props.boxes)
    props.updateBoxes([...props.boxes, color])
    setColor('')
  }
  const style = {
    margin: '2% 40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '10vh',
    outline: '2px black solid',
    borderRadius: '5px',
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} style={style}>
        <p>
          color:
          <input type="text" onChange={handleColorChange} value={color} />
        </p>
        <button type="submit">Add box</button>
      </form>
    </div>
  )
}

export default BoxForm
