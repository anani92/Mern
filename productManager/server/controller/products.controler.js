const Product = require('../model/product.models')

const findAllProduct = (req, res) => {
  console.log(Product)
  Product.find()
    .then((allProducts) => res.json({ products: allProducts }))
    .catch((err) =>
      res.json({ message: 'something have gone wrong', error: err })
    )
}

const findProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json({ product: product }))
    .catch((err) => res.json({ message: 'something went wrong', error: err }))
}
const newProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.json({ product: newProduct })
    })
    .catch((err) => res.json({ message: 'something went wrong', error: err }))
}

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

const updateProduct = (req, res) => {
  let id = req.params.id
  Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json({ product: updatedProduct }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

module.exports = {
  findAllProduct,
  findProduct,
  deleteProduct,
  updateProduct,
  newProduct,
}
