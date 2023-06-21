const express = require('express');
const router = express.Router();
const homeController = require('../Controllers/home_controller');

router.get('/', homeController.homePage);
router.use('/employees', require('./employees'));
router.use('/students', require('./students'));

module.exports = router;