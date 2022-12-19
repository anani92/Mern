const Joke = require('../models/jokes.model')

const findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}
const findJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((joke) => res.json({ joke: joke }))
    .catch((err) => res.json({ message: 'something went wrong', error: err }))
}

const newJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((err) => res.json({ message: 'something went wrong', error: err }))
}

const deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

const updateJoke = (req, res) => {
  let id = req.params.id
  Joke.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

module.exports = {
  newJoke,
  findAllJokes,
  findJoke,
  deleteJoke,
  updateJoke,
}
