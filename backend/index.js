const mongooes = require('mongoose');
const express = require('express')
const cors = require('cors')

require('./db.js');
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

app.use('/', require('./routes/auth.js'));
app.use('/notes', require('./routes/notes.js'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})