const router = require('express').Router();
const { User, Character, Comment, Class } = require('../models');
const withAuth = require('../utils/auth');

// Renders homepage with "all" characters, including comments. If we want to just show
// characters the include needs removed.
// **works
router.get('/', async (req, res) => {
  try { 
    const characterData = await Character.findAll({
    });
    const characters = characterData.map((character) => character.get({ plain: true}));

    res.render('homepage', {
      characters,
      logged_in: req.session.logged_in
    });
  
  } catch (err) {
    res.status(500).json(err);
  }
});

// If the user is already logged in, redirect the request to another route
//**works
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });

//Displays signup.handlebars
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
})

//Displays create.handlebars
router.get('/create', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // if we want to show all comments given by this user we need to add model: comments here
      include: [{ model: Character }],
    });

    const user = userData.get({ plain: true });

    res.render('create', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
      logged_in: req.session.logged_in
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
    //Returns true false for handlebar images.
    const race = {};
    switch (character.race) {
      case "Human":
        race.isHuman = true;
        break;
      case "Orc":
        race.isOrc = true;
        break;
      case "Dwarf":
        race.isDwarf = true;
        break;
      case "Elf":
        race.isElf = true;
        break;
      case "Gnome":
        race.isGnome = true;
        break;
      case "Dragonborn":
        race.isDragonborn = true;
        break;
      default:
        console.log("invalid race")
    };
    res.render('character', {
      ...character,
      ...race,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;