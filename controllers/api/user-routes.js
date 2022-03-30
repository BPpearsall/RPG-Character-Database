const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
    const newUser = User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })

    res.json(newUser);

  } catch (err) {
    res.status(400).json(err);
  }
    
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logs in and checks for valid email and password
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { email: req.body.email },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logs out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
