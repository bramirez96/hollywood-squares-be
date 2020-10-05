const db = require('../../data/db-connect');

const getQuestions = (InstanceID) => {
  return db('Questions').where({ InstanceID });
};

const addQuestions = (questions) => {
  return db('Questions').insert(questions).returning('*');
};

module.exports = {
  getQuestions,
  addQuestions,
};
