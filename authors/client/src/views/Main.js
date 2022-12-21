import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Authors from '../components/Authors'
import Button from '@mui/material/Button'

const Main = ({ authors, setAuthors }) => {
  const [loaded, setLoaded] = useState(false)

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId))
  }
  useEffect(() => {
    axios
      .get('http://localhost:8000/authors')

      .then((res) => {
        setAuthors(res.data.Authors)
        setLoaded(true)
        console.log(res.data.Authors)
      })
      .catch((err) => console.log(err))
  }, [authors])
  return (
    <div>
      <Link to="/authors/new">
        <Button variant="outlined" color="primary" disableElevation>
          Add new author
        </Button>
      </Link>
      <h4>We have quotes by:</h4>
      {loaded && (
        <Authors
          authors={authors}
          setAuthors={setAuthors}
          removeFromDom={removeFromDom}
        />
      )}
    </div>
  )
}

export default Main
