const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const query = require('./db/query');
const app = express ();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/data', (req, res) => {
  query.getPatch()
  .then(data => {
    res.json(data)
  })
})

app.post('/updateRow', (req, res) => {
  query.updateRow(req.body)
  .then(function() {
    res.redirect('/');
  })
})

app.listen(port, console.log('listening on ' + port))
