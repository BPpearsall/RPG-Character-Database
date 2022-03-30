const router = require('express').Router();
const { Character, Class, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all Characters and joined with user data
// may need to change route?
router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });
  
        const characters = characterData.map((character) => character.get({ plain: true}));
  
        res.render('homepage', {
            characters
        })
    } catch (err) {
        res.status(500).json(err);
    }
  });

// get a specific character by a PK.  includes the class and comments attached to the char.
router.get('/character/:id', withAuth, async (req, res) => {
    try {
        const characterData = await Character.findByPk(req.session.id, {
            include: [ { model: Class }, { model: Comment} ]
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