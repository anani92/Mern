import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

const Result = () => {
  const [result, setResult] = useState({})
  const { id, term } = useParams()
  const [loaded, setLoaded] = useState(false)
  console.log(id, term, 'hi')
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${term}/${id}`)
      .then((response) => {
        setResult(response.data)
        console.log(response.data)
      })
      .then(setLoaded(true))
  }, [id, term])
  return (
    <div>
      <h1>hello</h1>
      {loaded && term === 'people' ? (
        <div>
          <h3>Name: {result.name}</h3>
          <h3>Mass: {result.mass}</h3>
          <h3>Hair: {result.hair_color}</h3>
          <h3>Skin: {result.skin_color}</h3>
        </div>
      ) : (
        <div>
          <h3>climate: {result.climate}</h3>
          <h3>Terrain: {result.terrain}</h3>
          <h3>surface_water: {result.surface_water}</h3>
          <h3>Population: {result.population}</h3>
        </div>
      )}
    </div>
  )
}

export default Result
