const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const createCharacter = require('./create-character');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/create-character', createCharacter);

module.exports = router;
