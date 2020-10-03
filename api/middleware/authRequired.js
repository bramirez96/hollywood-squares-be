const { token, createError } = require('../../lib');

module.exports = (req, res, next) => {
  const { Authorization } = req.headers;
  try {
    if (!Authorization) throw new Error('You must be logged in to do that.');
    token.verify(Authorization, (err, decodedToken) => {
      if (err) throw new Error('You are no longer logged in.');
      req.decodedToken = decodedToken;
      next();
    });
  } catch (error) {
    createError(error);
  }
};
