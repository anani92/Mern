import React from 'react'
import Box from './Box'
const Container = (props) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evently',
    flexWrap: 'wrap',
    margin: '2rem',
    height: '40vh',
    backgroundColor: 'lightgrey',
  }
  const boxes = props.boxes
  console.log(boxes)
  return (
    <div style={containerStyle}>
      {boxes.map((box, i) => (
        <Box key={i} style={{ backgroundColor: box }} color={box} />
      ))}
    </div>
  )
}

export default Container
