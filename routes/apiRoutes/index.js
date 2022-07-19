const router = require('express').Router();

const dbRoutes = require('./notesRoutes');

router.use(dbRoutes);

module.exports = router;