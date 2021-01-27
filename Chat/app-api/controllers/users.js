const mongoose = require('mongoose');
const modelUsers = mongoose.model('Users');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.getAllUsers = async (req, res) => {
    const users = await modelUsers.find();
    await sendJSONResponse(res, 200, users);
};
