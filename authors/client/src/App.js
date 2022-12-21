import logo from './logo.svg'
import './App.css'
import Main from './views/Main'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import UpdateAuthor from './views/UpdateAuthor'
import AddAuthor from './views/AddAuthor'
function App() {
  const [authors, setAuthors] = useState([])
  const [errors, setErrors] = useState([])

  return (
    <>
      <h1>Favorite authors</h1>
      <Routes>
        <Route
          path="/"
          element={<Main authors={authors} setAuthors={setAuthors} />}
        />
        <Route
          path="/authors/:id"
          element={
            <AddAuthor
              authors={authors}
              setAuthors={setAuthors}
              errors={errors}
              setErrors={setErrors}
            />
          }
        />
        <Route
          path="/authors/:id/edit"
          element={
            <UpdateAuthor
              authors={authors}
              setAuthors={setAuthors}
              errors={errors}
              setErrors={setErrors}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
