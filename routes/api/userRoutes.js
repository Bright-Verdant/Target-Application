const router = require('express').Router();

const userController = require('../../controllers/api/userControllers');

router.get('/login', userController.getLoginPage);
router.post('/', userController.createUser);
router.post('/api/users/login', userController.loginUser);
router.post('/logout', userController.logOutUser);





module.exports = router;