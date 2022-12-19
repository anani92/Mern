const jokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
  app.get('/jokes', jokesController.findAllJokes)
  app.get('/jokes/:id', jokesController.findJoke)
  app.post('/jokes/new', jokesController.newJoke)
  app.delete('/jokes/delete', jokesController.deleteJoke)
  app.put('/jokes/:id/edit', jokesController.updateJoke)
}
