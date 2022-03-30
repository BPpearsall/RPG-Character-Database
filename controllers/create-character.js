const router = require('express').Router();
const { Character, Class, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all Characters and joined with user data
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
