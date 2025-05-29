const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
  // get authorization headers value
  const authHeader = req.headers.authorization;
  // verify if authHeader is correct
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token provided');
  }
  // extract the token value
  const token = authHeader.split(' ')[1];
  // decode token and add to a request object
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    // create a new object to pass with the request
    req.user = { id, username };
    // move to the next middleware
    next();
  } catch (error) {
    throw new UnauthenticatedError('No authorized access to this route');
  }
};

module.exports = authenticationMiddleware;
