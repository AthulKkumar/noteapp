const mongooes = require('mongoose');
const express = require('express')

require('./db.js');
const app = express()
const port = 5000

app.use(express.json());

app.use('/', require('./routes/auth.js'));
app.use('/notes', require('./routes/notes.js'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})