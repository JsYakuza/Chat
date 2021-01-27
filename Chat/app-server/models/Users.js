const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    username: {type: String, unique:true, required:true},
    email:{type: String, unique: true, required: true},
    password:{type: String, unique: true, required: true},
    status:{type:String, default: 'offline'},
    channels: {type: Types.ObjectId, ref:'Channels'},
    messages:{type: Types.ObjectId, ref:'Messages'},
});

module.exports = model('Users', schema);
