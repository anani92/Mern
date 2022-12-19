const productsController = require('../controller/products.controler')
module.exports = (app) => {
  app.get('/products', productsController.findAllProduct)
  app.get('/products/:id', productsController.findProduct)
  app.post('/products/new', productsController.newProduct)
  app.delete('/products/delete', productsController.deleteProduct)
  app.put('/products/:id/edit', productsController.updateProduct)
}
