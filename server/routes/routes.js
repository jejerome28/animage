const express = require('express');
const { animeHome, aniDetails,login, aniSearch, signupPage, signupPost, logout, postComment, loginPage, userProfile, updateProfile } = require('../controller');
const router = express.Router();
const {checkAuth, checkNotAuth} = require('../middleware')


router.get('/', animeHome)
router.get('/details/:id', aniDetails);
router.post('/details/:id/post_comment', checkAuth, postComment);
router.post('/update_profile/:id', updateProfile)
router.post('/search', aniSearch);
router.get('/signup', checkNotAuth, signupPage);
router.post('/signup', signupPost);
router.get('/login', loginPage);
router.post('/login', login);
router.get('/profile/:id', userProfile)
router.delete('/logout', logout);

module.exports = router;





