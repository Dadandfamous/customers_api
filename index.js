const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()
const port = process.env.PORT || 3333

app
  .use(bodyParser.json())
  .use(router)
  .listen(port, () => console.log(`Listening on port ${port}`))
