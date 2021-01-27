const mongoose = require('mongoose');
const modelChannels = mongoose.model('Channels');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.getAllChannels = async (req, res) => {
    const channels = await modelChannels.find();
    await sendJSONResponse(res, 200, channels);
};
