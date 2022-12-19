const mongoose = require('mongoose')

const jokesSchema = mongoose.Schema(
  {
    setup: String,
    punchLine: String,
  },
  { timestamps: true }
)
const Joke = mongoose.model('Joke', jokesSchema)
module.exports = Joke
