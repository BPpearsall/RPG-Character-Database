const router = require('express').Router();
const { User, Character, Comment, Class } = require('../models');
const withAuth = require('../utils/auth');

// Renders homepage with "all" characters, including comments. If we want to just show
// characters the include needs removed.
// **works
router.get('/', async (req, res) => {
  try { 
    const characterData = await Character.findAll();
    const characters = characterData.map((character) => character.get({ plain: true}));
    const user = await (await User.findByPk(req.session.user_id)).get({plain: true});

    res.render('homepage', {
      characters,
      user
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// If the user is already logged in, redirect the request to another route
//**works
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }

    res.render('login');
  });

// Find the logged in user based on the session ID
//**handlebar profile page needs created
//**works
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // if we want to show all comments given by this user we need to add model: comments here
      include: [{ model: Character }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a specific character by a PK.  includes the class and comments attached to the char.
// **works
router.get('/character/:id', async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      include: [{ model: Class }, { model: Comment }, {model: User}],
    });
    const character = characterData.get({ plain: true });

    res.render('character', {
      ...character,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;