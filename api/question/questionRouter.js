const router = require('express').Router();

const { authRequired } = require('../middleware');
const { ops } = require('../../lib');

const Questions = require('./questionModel');

router.get('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  ops.getAll(res, Questions.getQuestions, 'Question', id);
});

router.post('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  const qs = req.body.map((x) => ({ ...x, InstanceID: id }));
  ops.postMult(res, Questions.addQuestions, 'Question', qs);
});

module.exports = router;
