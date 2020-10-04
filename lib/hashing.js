const bc = require('bcryptjs');

module.exports = {
  create: (password) => {
    return bc.hashSync(password, process.env.BC_ROUNDS || 8);
  },
  check: (str, hash) => {
    return bc.compareSync(str, hash);
  },
};
