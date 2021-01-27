const express = require('express');
const router = express.Router();
const messages = require('../controllers/messages');
const channels = require('../controllers/channels');
const users = require('../controllers/users');

router.get('/messages/:channel', messages.getAllChatMessages);
router.get('/messages/:text/:channel', messages.createNewMessage);
router.get('/channels', channels.getAllChannels);
router.get('/users', users.getAllUsers);

module.exports = router;