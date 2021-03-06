const router = require('express').Router();

const Games = require('./gameModel');
const { authRequired } = require('../middleware/');
const { ops } = require('../../lib');

router.post('/', authRequired, (req, res) => {
  const { ID } = req.decodedToken;
  const instance = req.body;
  ops.post(res, Games.newInstance, 'Game', { ...instance, OwnerID: ID });
});

module.exports = router;
