const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const createUser = () => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
  }
}

const createCompany = () => {
  return {
    name: faker.company.name(),
    industry: faker.word.adjective(),
    ceo: faker.internet.userName(),
    department: faker.commerce.department(),
  }
}

app.get('/api/users/new', (req, res) => {
  let newUser = createUser()
  res.json(newUser)
})

app.get('/api/companies/new', (req, res) => {
  let newCompany = createCompany()
  res.json(newCompany)
})

app.get('/api/company/user', (req, res) => {
  let newCompany = createCompany()
  let newUser = createUser()
  res.json({ newCompany, newUser })
})
app.listen(8000, () => {
  console.log('app is listening on port 8000')
})
