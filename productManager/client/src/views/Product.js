import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Product = (props) => {
  let { id } = useParams()
  let [product, setProduct] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:8000/products/' + id).then((res) => {
      setProduct(res.data.product)

      setLoaded(true)
    })
  }, [])

  return (
    <div>
      Product
      {loaded && (
        <div>
          <p>Name: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  )
}

export default Product
