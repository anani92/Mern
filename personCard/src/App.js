import './App.css'
import React, { Component } from 'react'
import Person from './components/person'
export default function App() {
  return (
    <div>
      <Person fName="ahmad" lName="ismail" age={25} hair="black" />
      <Person fName="ahmad" lName="ismail" age={25} hair="black" />
      <Person fName="ahmad" lName="ismail" age={25} hair="black" />
      <Person fName="ahmad" lName="ismail" age={25} hair="black" />
    </div>
  )
}
