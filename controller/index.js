const { animeHome, aniDetails, aniSearch, signupPage, signupPost, login, logout, postComment, loginPage } = require('./getAnime');
const getAnime = require('./fetchApi');
const auth = require('./auth');

module.exports = {  animeHome, aniDetails, aniSearch, signupPage, signupPost, login, logout, postComment, loginPage, getAnime, auth }