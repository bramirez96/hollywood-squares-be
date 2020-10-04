const { token, createError } = require('../../lib');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) throw new Error('You must be logged in to do that.');
    token.verify(authorization, (err, decodedToken) => {
      if (err) throw new Error('You are no longer logged in.');
      req.decodedToken = decodedToken;
      next();
    });
    next;
  } catch (error) {
    createError(res, error);
  }
};
