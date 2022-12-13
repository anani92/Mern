import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Container = () => {
  const [pokemons, setPokemons] = useState(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then((response) => {
        setPokemons(response.data.results)
      })
  }, [])
  const handleClick = () => {
    clicked ? setClicked(false) : setClicked(true)
  }

  return (
    <div>
      <button onClick={(e) => handleClick()}>show Pokemons</button>
      <ul>
        {clicked &&
          pokemons.map((poke, i) => {
            return <li key={i}>{poke.name}</li>
          })}
      </ul>
    </div>
  )
}

export default Container
