const router = require('express').Router;
const appController = require('../controllers/appController');

router.get(appController.launch);

module.exports = router;