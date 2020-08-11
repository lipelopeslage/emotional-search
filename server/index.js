const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
dotenv.config()

app.use(bodyParser.json())

app.use(express.static(__dirname + './../app/dist'));

app.listen(port, () => {
  console.log(`Listening to port ${port}...`)
})
