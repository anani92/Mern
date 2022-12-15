import React from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
  let { word, color } = useParams()
  return (
    <div>
      <h2 style={{ color: color }}>
        {isNaN(word)
          ? `you entered ${word} in the path`
          : 'you entered the number ' + word}
      </h2>
    </div>
  )
}

export default Show
