import React, { useState } from 'react'
import Tab from './Tab'
const Container = (props) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evently',
    flexWrap: 'wrap',
    margin: '2rem',
    height: '40vh',
  }
  const tabs = props.tabs
  const [content, setContent] = useState('')
  const contentStyle = {
    fontSize: '1rem',
    color: 'blue',
    transition: 'fontSize .3s, color .4s',
  }
  return (
    <div style={containerStyle}>
      <div className="nav">
        {tabs.map((tab, i) => (
          <Tab key={i} idx={i + 1} setContent={setContent} />
        ))}
      </div>

      <div className="container border my-5 bg-light">
        <p style={contentStyle}>{content}</p>
      </div>
    </div>
  )
}

export default Container
