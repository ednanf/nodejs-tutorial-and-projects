let { people } = require('../../../data');

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide name value.' });
  }
  res.status(201).json({ success: true, person: name });
};

const postPostmanPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide name value.' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
};

const putPeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
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
};

module.exports = {
  getPeople,
  postPeople,
  postPostmanPeople,
  putPeople,
  deletePeople,
};
