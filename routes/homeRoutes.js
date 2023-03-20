const router = require('express').Router();
const galleryController = require('../controllers/galleryController');
const paintingController = require('../controllers/paintingController');
const withAuth = require('../utils/auth');

// route to create/add a home using async/await
router.get('/', galleryController.getGalleries);
router.get('/gallery/:id', withAuth, galleryController.getSingleGallery);
router.get('/painting/:id', withAuth, paintingController.getSinglePainting);

module.exports = router;