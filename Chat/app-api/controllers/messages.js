const mongoose = require('mongoose');
const modelMessages = mongoose.model('Messages');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.getAllChatMessages = async (req, res) => {
    const channel = req.params.channel;
    const messages = await modelMessages.find({channel: channel});
    await sendJSONResponse(res, 200, {messages: messages});
};

module.exports.createNewMessage = async (req, res) => {
    const {text, channel} = req.params;
    if (text && channel) {
        await modelMessages.create({
            text: text,
            channel: channel
        });
    }
    await sendJSONResponse(res, 201, 'Successfully')
};
