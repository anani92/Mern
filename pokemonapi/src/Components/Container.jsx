import React from 'react'
import { useState, useEffect } from 'react'
const Container = () => {
  const [pokemons, setPokemons] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.results)
      })
      .then(setLoaded(true))
  }, [])

  return (
    <div>
      <ul>
        {loaded &&
          pokemons.map((poke) => {
            return <li>{poke.name}</li>
          })}
      </ul>
    </div>
  )
}

export default Container
