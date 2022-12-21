import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
const AddAuthor = ({ authors, setAuthors, errors, setErrors }) => {
  let navigate = useNavigate()

  const handleCreate = (author) => {
    axios
      .post('http://localhost:8000/authors/new', author)
      .then((res) => {
        console.log(res)
        setAuthors([...authors, res.data])
        navigate('/')
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div>
      <h2>new Author</h2>
      <Link to="/">Home</Link>

      <AuthorForm
        initialName=""
        onSubmitHandler={handleCreate}
        errors={errors}
      />
    </div>
  )
}

export default AddAuthor
