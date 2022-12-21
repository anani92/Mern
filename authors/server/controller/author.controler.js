const Author = require('../model/author.models')

const findAllAuthor = (req, res) => {
  console.log(Author)
  Author.find()
    .then((allAuthors) => res.json({ Authors: allAuthors }))
    .catch((err) =>
      res.json({ message: 'something have gone wrong', error: err })
    )
}

const findAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((Author) => res.json({ Author: Author }))
    .catch((err) => res.json({ message: 'something went wrong', error: err }))
}
const newAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      res.json({ Author: newAuthor })
    })
    .catch((err) => res.status(400).json(err))
}

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

const updateAuthor = (req, res) => {
  let id = req.params.id
  Author.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json({ Author: updatedAuthor }))
    .catch((err) => res.status(400).json(err))
}

module.exports = {
  findAllAuthor,
  findAuthor,
  deleteAuthor,
  updateAuthor,
  newAuthor,
}
