import React from 'react'

function person(props) {
  return (
    <div Style={'border: 1px solid black; padding:1rem;'}>
      <h2>
        {props.fName}, {props.lName}
      </h2>
      <h3>age: {props.age}</h3>
      <h3>hair color: {props.hair}</h3>
    </div>
  )
}

export default person
