import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const Product = (props) => {
  let { id } = useParams()
  let [product, setProduct] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8000/products/' + id).then((res) => {
      setProduct(res.data.product)
    })
  }, [])

  return (
    <div>
      Product
      <div>
        <p>Name: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <div>
          {' '}
          <Link to={`/products/${product._id}/edit`}>
            {' '}
            <button>edit</button>
          </Link>{' '}
        </div>
      </div>
    </div>
  )
}

export default Product
