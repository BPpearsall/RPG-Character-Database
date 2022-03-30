const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

// Get single character by specific id
router.get('/:id', withAuth, async (req, res) => {
    try {
        const characterData = await Character.findByPk({
            where: {
                id: req.params.id,
            }})
        const character = characterData.get({ plain: true});
        res.render('character', {
            character,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// Posts new character
router.post('/', withAuth, async (req, res) => {
    try {
        const newCharacter = await Character.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newCharacter);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete single character by specific id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const characterData = await Character.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!characterData) {
            res.status(404).json({ message: 'No Character with that id was found.'});
            return;
        }
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;