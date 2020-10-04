const db = require('../../data/db-connect');

const newInstance = (info) => {
  return db('Games').insert(info).returning(['ID']);
};

module.exports = {
  newInstance,
};
