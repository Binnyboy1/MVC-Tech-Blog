const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    res
    .status(400)
    .json({ message: 'This will be responsible for creating a new user' });
});

router.post('/login', async (req, res) => {
    res
    .status(400)
    .json({ message: 'This will be responsible for logging in a user' });
});

router.post('/logout', (req, res) => {
    res
    .status(400)
    .json({ message: 'This will be responsible for logging out a user' });
});

module.exports = router;
