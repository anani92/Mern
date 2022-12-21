const authorsController = require('../controller/author.controler')
module.exports = (app) => {
  app.get('/authors', authorsController.findAllAuthor)
  app.get('/authors/:id', authorsController.findAuthor)
  app.post('/authors/new', authorsController.newAuthor)
  app.delete('/authors/:id/delete', authorsController.deleteAuthor)
  app.put('/authors/:id/edit', authorsController.updateAuthor)
}
