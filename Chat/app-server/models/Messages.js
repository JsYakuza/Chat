const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    text: {type: String, required:true},
    createDate: {type: Date, default: Date.now()},
    users: {type: Types.ObjectId, ref:'Users'},
    channel:{type: String, required:true},
});

module.exports = model('Messages', schema);
