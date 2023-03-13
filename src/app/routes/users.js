const router = require('express').Router();

const users = [
  {
    id: 1,
    name: 'Ada Lovelace',
  },
  {
    id: 2,
    name: 'Morgan Nightingale',
  },
];

router.get('/', (req, res) => res.status(200).json(users));

module.exports = router;
