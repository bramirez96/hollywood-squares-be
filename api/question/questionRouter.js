const router = require('express').Router();

const { authRequired } = require('../middleware');
const { ops } = require('../../lib');

const Questions = require('./questionModel');

router.get('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  ops.getAll(res, Questions.getQuestions, 'Question', id);
});

router.post('/:id', authRequired, (req, res) => {
  const { id: InstanceID } = req.params;
  let data;
  if (Array.isArray(req.body)) {
    data = req.body.map((x) => ({ ...x, InstanceID }));
  } else {
    data = { ...req.body, InstanceID };
  }
  ops.postMult(res, Questions.addQuestions, 'Question', data);
});

module.exports = router;
