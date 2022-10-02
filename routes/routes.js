const express = require('express');
const { animeHome, aniDetails, aniSearch, signupPage, signupPost, login, logout } = require('../controller/getAnime');
const router = express.Router();


router.get('/', animeHome)
router.get('/details/:id', aniDetails);
router.post('/search', aniSearch);
router.get('/signup', signupPage);
router.post('/signup', signupPost);
router.post('/login', login);
router.delete('/logout', logout);

module.exports = router;





