const router = require('express').Router();
const { User } = require('../../models');

// creates new user
//** works 
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
    });
    
    res.json(newUser);
    
  } catch (err) {
    res.status(400).json(err);
  }
    
});

// ** works
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { email: req.body.email },
    });
    // console.log(userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email , please try again' });
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

    res.status(400).json({error: err, message: 'something else is broken'});
  }
});

// logs out
//**works
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
