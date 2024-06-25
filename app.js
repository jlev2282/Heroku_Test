// app.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let notes = [];

app.get('/', (req, res) => {
  res.render('index', { notes: notes });
});

app.post('/add-note', (req, res) => {
  const note = {
    text: req.body.note,
    timestamp: new Date().toLocaleString()
  };
  notes.push(note);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
