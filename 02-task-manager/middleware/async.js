const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // Pass the error to the middleware stack to be handled automatically
      next(error);
    }
  };
};

module.exports = asyncWrapper;
