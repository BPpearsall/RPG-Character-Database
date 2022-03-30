const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./commentRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/user', userRoutes);
router.use('/character', characterRoutes);
router.use('/comment', commentRoutes);
// router.use('/signup');

module.exports = router;
