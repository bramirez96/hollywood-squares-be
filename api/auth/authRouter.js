const router = require('express').Router();
const Auth = require('./authModel');
const { ops, createError } = require('../../lib/');

const bc = require('bcryptjs');

router.post('/register', (req, res) => {
  const user = req.body;
  ops.post(res, Auth.createUser, 'User', user);
});

router.post('/login', async (req, res) => {
  const { Username, Password } = req.body;
  try {
    const user = await Auth.getByUsername(Username);
    if (user.length <= 0) {
      throw new Error('not found');
    }
    res.status(200).json(user[0]);
  } catch (error) {
    createError(res, error, 'User');
  }
});

module.exports = router;
