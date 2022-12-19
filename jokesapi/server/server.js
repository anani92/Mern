const express = require('express')
require('./config/mongoose.config')
const app = express()
const routes = require('./routes/jokes.routes')
const port = 8000
app.use(express.json(), express.urlencoded({ extended: true }))
routes(app)
app.listen(port, console.log('app is listening on port: 8000'))
