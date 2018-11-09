require('dotenv').config()
const express = require('express'),
      app = express(),
      {SERVER_PORT} = process.env

app.use(express.static(`${__dirname}/../dist`))

app.listen(SERVER_PORT, () => {
  console.log(`server running on ${SERVER_PORT}`)
})