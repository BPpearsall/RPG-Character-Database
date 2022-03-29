const router = require('express').Router();
const { Comment } = require('../../models');

// Find single comment by specific ID
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk({
            where: {
                id: req.params.id,
            }})
            const comment = commentData.get({ plain: true });
            res.render('comment', {
                comment,
            })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// Posts new comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete single comment by specific ID
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if(!commentData) {
            res.status(404).json({ message: "No comment found with this id."});
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;