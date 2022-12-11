import React from 'react'

const Box = (props) => {
  const style = {
    margin: '5px',
    minHeight: 'auto',
    outline: '2px black solid',
    borderRadius: '5px',
    padding: '5rem',
    backgroundColor: props.color,
  }
  return <div style={style}></div>
}

export default Box
