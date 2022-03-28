const router = require('express').Router();
const { Character, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        }),

        const characters = projectData.map((character) => character.get({ plain: true}));

        res.render('homepage', {
            characters
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get()