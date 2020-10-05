const router = require('express').Router();

const { createError, hash, token } = require('../../lib/');

const Auth = require('./authModel');

router.post('/register', async (req, res) => {
  const user = req.body;
  try {
    const [newUser] = await Auth.createUser({
      ...user,
      Password: hash.create(user.Password),
    });

    res.status(201).json({ token: token.create(newUser) });
  } catch (error) {
    createError(res, error, 'User');
  }
});

router.post('/login', async (req, res) => {
  const { Username, Password } = req.body;
  try {
    const [user] = await Auth.getByUsername(Username);
    if (!user) throw new Error('not found');

    if (hash.check(Password, user.Password)) {
      const newToken = token.create(user);
      res.status(201).json({ token: newToken });
    } else {
      throw new Error('invalid credentials');
    }
  } catch (error) {
    createError(res, error, 'User');
  }
});

module.exports = router;
