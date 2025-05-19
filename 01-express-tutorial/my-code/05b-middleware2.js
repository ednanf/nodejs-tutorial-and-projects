const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'ednan') {
    req.user = { name: 'ednan', id: 1 };
    next();
  } else {
    res.status(401).send('The user is not authorized to access this resource.');
  }
};

module.exports = authorize;
