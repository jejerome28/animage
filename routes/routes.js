const express = require('express');
const { animeHome, aniDetails, aniSearch, signupPage, signupPost, login, logout, postComment, loginPage } = require('../controller/getAnime');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const checkNotAuth = require('../middleware/checkNotAuth');


router.get('/', animeHome)
router.get('/details/:id', aniDetails);
router.post('/details/:id/post_comment', checkAuth, postComment);
router.post('/search', aniSearch);
router.get('/signup', checkNotAuth, signupPage);
router.post('/signup', signupPost);
router.get('/login', loginPage);
router.post('/login', login);
router.delete('/logout', logout);

module.exports = router;





