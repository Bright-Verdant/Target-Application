const router = require('express').Router();
const saveCardController = require('../../controllers/api/saveCardController');
const userController = require('../../controllers/api/userControllers');

// User Routes to pages 
router.get('/login', userController.getLoginPage);
router.post('/', userController.createUser);
router.post('/api/users/login', userController.loginUser);
router.post('/logout', userController.logOutUser);
router.post('/api/saveCard', saveCardController.saveCard);




module.exports = router;