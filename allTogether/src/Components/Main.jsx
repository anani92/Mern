import React from 'react'
import SubContents from './SubContents'
import Advertisement from './Advertisement'
export default function Main() {
  return (
    <div
      style={{
        backgroundColor: ' red',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        height: '30rem',
        width: '70%',
        float: 'right',
        marginTop: '1rem',
        padding: '2em',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '25rem',
        }}
      >
        <SubContents />
        <SubContents />
        <SubContents />
      </div>
      <Advertisement />
    </div>
  )
}
