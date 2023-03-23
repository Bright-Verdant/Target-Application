const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userControllers');

router.get('/login', userController.getLoginPage);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/logout', userController.logOutUser);


module.exports = router;