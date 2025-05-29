// check username, password in POST request
// if exists, create new JWT
// send it back to frontend
//
// only requests with JWT can access the dashboard

const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  // check if the username and password fields are filled
  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }
  // just for this demo, normaly the ID is provided by the DB!
  const id = new Date().getDate();
  // generate a JWT token
  // try to keep the payload small, it's a better experience for the user!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello, ${req.user.username}`,
    secret: `Here is your lucky number ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
