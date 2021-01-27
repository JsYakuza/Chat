const express = require('express');
const router = express.Router();
const main = require('../controllers/main');
const auth = require('../controllers/auth');
const chatMessages = require('../controllers/chatMessages');
const bodyParser = require('body-parser');

const urlEncoding = bodyParser.urlencoded({extended: false});

router.get('/chat', main.chatMainPage);
router.get('/chat/load/:channel', chatMessages.loadChatMessages);
router.get('/chat/:messages/channel/:now', main.chatMessages);
router.post('/chat/:messages/channel/:now', urlEncoding, main.addNewMessage);
router.get('/', auth.relocateToAuth);
router.get('/user', auth.login);

module.exports = router;
