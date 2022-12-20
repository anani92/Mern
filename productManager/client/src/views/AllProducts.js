import React from 'react'
import axios from 'axios'
import Product from './Product'
import { Link } from 'react-router-dom'
const AllProducts = (props) => {
  const { removeFromDom } = props
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/products/${id}/delete`)
      .then((res) => {
        removeFromDom(id)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <h2>All products</h2>
      {props.allProducts.map((product, i) => (
        <p key={i}>
          <Link to={'/products/' + product._id}>{product.title}</Link>
          <button
            onClick={(e) => {
              handleDelete(product._id)
            }}
          >
            delete
          </button>
        </p>
      ))}
    </div>
  )
}

export default AllProducts
