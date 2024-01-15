
const express = require('express')
const route = require('./routes')
const app = express()
const port = 3000


app.use(express.json());

app.use(route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports [
  app,
  route
];
