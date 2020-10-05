const db = require('../../data/db-connect');

const newInstance = (info) => {
  return db('Games').insert(info).returning(['ID']);
};

const getInstancesByUser = (OwnerID) => {
  return db('Games')
    .where({ OwnerID })
    .select(['ID', 'Title', 'Finished', 'WinningTeam AS Winner']);
};
module.exports = {
  newInstance,
  getInstancesByUser,
};
