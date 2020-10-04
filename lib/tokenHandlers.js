const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

module.exports = {
  create: (user) => {
    const { ID, Username } = user;
    const payload = { ID, Username };
    const options = { expiresIn: '1d' };
    if (user.FirstName) payload.FirstName = user.FirstName;
    if (user.LastName) payload.LastName = user.LastName;
    return jwt.sign(payload, secret, options);
  },
  verify: (token, cb) => jwt.verify(token, secret, cb),
};
