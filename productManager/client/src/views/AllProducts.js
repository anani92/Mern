import React from 'react'
import axios from 'axios'
import Product from './Product'
import { Link } from 'react-router-dom'
const AllProducts = (props) => {
  return (
    <div>
      <h2>All products</h2>
      {props.allProducts.map((product, i) => (
        <p key={i}>
          <Link to={'/products/' + product._id}>{product.title}</Link>
        </p>
      ))}
    </div>
  )
}

export default AllProducts
