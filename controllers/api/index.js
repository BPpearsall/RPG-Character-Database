const router = require('express').Router();
const userRoutes = require('./user-routes');
// const postComments = require('./post-comment');
// const postChar = require('./post-char');

router.use('/users', userRoutes);
// router.use('/postchar', postChar);
// router.use('/postComments', postComments);
// router.use('/signup');

module.exports = router;
