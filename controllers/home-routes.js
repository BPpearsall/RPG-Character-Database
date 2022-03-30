const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        // if we want to show all comments given by this user we need to add model: comments here
        include: [{ model: Character }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
       ... user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;