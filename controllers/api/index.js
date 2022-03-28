const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/signup')

module.exports = router;
