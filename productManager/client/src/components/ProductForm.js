import React, { useState } from 'react'
import axios from 'axios'
const ProductForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:8000/products/new', {
        title,
        description,
        price,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>new Product</h2>
      <p>
        Title:{' '}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        Description:{' '}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <p>
        Price:{' '}
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>

      <input type="submit" value="submit" />
    </form>
  )
}

export default ProductForm
