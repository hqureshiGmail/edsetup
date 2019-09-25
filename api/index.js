const express = require('express')
const query = require('./controllers/query')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/query', (req, res) => query.query(req, res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
