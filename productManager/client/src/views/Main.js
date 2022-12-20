import React, { useState, useEffect } from 'react'
import ProductForm from '../components/ProductForm'
import AllProducts from './AllProducts'
import axios from 'axios'

const Main = () => {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios
      .get('http://localhost:8000/products')

      .then((res) => {
        setProducts(res.data.products)
        setLoaded(true)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [products])
  return (
    <div>
      <ProductForm />
      {loaded && <AllProducts allProducts={products} />}
    </div>
  )
}

export default Main
