const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/userController');

router.route('/').post(register);
router.route('/login').get(login);

module.exports = router;
