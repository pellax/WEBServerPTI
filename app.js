const express = require('express')
const fs = require('fs')
const app = express()
const port = 32685

app.get('/login',(req,res, next) => {


})
app.listen(port, () => {
  console.log(`PTI HTTP Server listening at http://localhost:${port}`)
})

app.use('/',require('./routes/index'));
app.use('/users',require('./routes)
