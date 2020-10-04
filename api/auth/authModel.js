const db = require('../../data/db-connect');

const createUser = (user) => {
  return db('Users').insert(user).returning('*');
};

const getByUsername = (Username) => {
  return db('Users').where({ Username });
};

module.exports = {
  createUser,
  getByUsername,
};
