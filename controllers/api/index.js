const router = require('express').Router();
const userRoutes = require('./UserModelRoutes');
const entryRoutes = require('./entryRoutes')

router.use('/user', userRoutes);
router.use('/entry', entryRoutes);

module.exports = router;
