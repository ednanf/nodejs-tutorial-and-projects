// check username, password in POST request
// if exists, create new JWT
// send it back to frontend
//
// only requests with JWT can access the dashboard

const jwt = require('jsonwebtoken');

const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;
  // check if the username and password fields are filled
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
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
  // obtain the auth header
  const authHeader = req.headers.authorization;
  // check if the authHeader is correct
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }
  // verify if the token is valid
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      message: `Hello, ${decoded.username}`,
      secret: `Here is your lucky number ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError('Not authorized to access this route', 401);
  }
};

module.exports = { login, dashboard };
