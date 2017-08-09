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

app.get('/quilt', (req, res) => {
  query.getQuilt()
  .then(data => {
    res.json(data)
  })
})

app.get('/patch/:id', (req, res) => {
  query.getPatch(req.params.id)
  .then(data => {
    res.json(data)
  })
})

app.post('/updatePatch/:id', (req, res) => {
  query.updatePatch({id: req.params.id, data: req.body})
  .then(function() {
    res.redirect('/');
  })
})

app.listen(port, console.log('listening on ' + port))
