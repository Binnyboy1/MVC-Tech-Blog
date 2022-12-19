const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res
    .status(400)
    .json({ message: 'This will be the homepage' });
});

router.get('/post/:id', withAuth, async (req, res) => {
  res
    .status(400)
    .json({ message: 'This will a selected user post page' });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
