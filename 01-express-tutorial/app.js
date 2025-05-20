const express = require('express');

let { people } = require('./data');

const app = express();

// Static assets
app.use(express.static('./methods-public'));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse JSON
app.use(express.json());

// Routes
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide name value.' });
  }
  res.status(201).json({ success: true, person: name });
});

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide name value.' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Please provide credentials.');
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with ${id} found!` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      message: `No person with ${req.params.id} found!`,
    });
  }
  return res
    .status(200)
    .json({ success: true, message: 'DELETED SUCCESSFULLY!' });
});

app.listen(8000, () => {
  console.log('Server is listening on localhost:8000');
});
