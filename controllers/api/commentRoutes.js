const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Find single comment by specific ID  **** Ask if they want to search by single comment.
// router.get('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.findByPk({
//             where: {
//                 id: req.params.id,
//             }})
//             const comment = commentData.get({ plain: true });
//             res.render('comment', {
//                 comment,
//             })
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err)
//     }
// });

// Put comment = ICEBOX

// Posts new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            body: req.body.comment,
            user_id: req.session.user_id,
            character_id: req.body.character_id
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete single comment by specific ID ICEBOX
router.delete('/:id', withAuth, async (req, res) => {
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