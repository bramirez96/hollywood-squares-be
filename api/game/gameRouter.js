const router = require('express').Router();

const { authRequired } = require('../middleware/');
const { ops } = require('../../lib');

const Games = require('./gameModel');

router.get('/', authRequired, (req, res) => {
  const { ID } = req.decodedToken;
  ops.getAll(res, Games.getInstancesByUser, 'Game', ID);
});

router.post('/', authRequired, (req, res) => {
  const { ID } = req.decodedToken;
  const instance = req.body;
  ops.post(res, Games.newInstance, 'Game', { ...instance, OwnerID: ID });
});

module.exports = router;
