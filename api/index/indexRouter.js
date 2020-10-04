const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    api: 'is up!',
    timestamp: Date.now(),
  });
});

module.exports = router;
