const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    name: {type: String, unique:true, required:true},
    users: {type: Types.ObjectId, ref:'Users'},
    messages:{type: Types.ObjectId, ref:'Messages'},
});

module.exports = model('Channels', schema)
