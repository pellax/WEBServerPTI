const express = require('express')
const fs = require('fs')
const app = express()
const port = 32685

//Importams el modulo JSON
app.use(express.json());

//Miramos si el fichero de usuarios existe y sino lo creamos 
const usersFile = './users.json'
if (!(fs.existsSync(usersFile)) {
  fs.writeFileSync(usersFile,'{"users": []}');
}


app.get('/login',(req, res, next) => {

  req.body.user 
  req.body.password 
  bool error = false;
  

})



app.listen(port, () => {
  console.log(`PTI HTTP Server listening at http://localhost:${port}`)
})

app.use('/',require('./routes/index'));
app.use('/users',require('./routes)
