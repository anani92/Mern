import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'

const Authors = (props) => {
  const { removeFromDom, authors, setAuthors } = props

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/authors/${id}/delete`)
      .then((res) => {
        removeFromDom(id)
      })
      .catch((err) => console.log(err))
  }
  return (
    <Paper sx={{ width: '50%', overflow: 'hidden', marginLeft: '2rem' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key="author" align="right" style={{ minWidth: 170 }}>
                Authors
              </TableCell>
              <TableCell key="author" align="right" style={{ minWidth: 170 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author, i) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                <TableCell align={'right'}>
                  <Link to={'/authors/' + author._id}>{author.name}</Link>
                </TableCell>
                <TableCell align={'right'}>
                  <Link to={'/authors/' + author._id + '/edit'}>
                    <Button color="secondary">edit</Button>
                  </Link>
                  <Button
                    variant="outlined"
                    color="error"
                    disableElevation
                    onClick={(e) => {
                      handleDelete(author._id)
                    }}
                  >
                    {' '}
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Authors
