const mongoose = require('mongoose');
const Channels = require('./Channels');
const Users = require('./Users');
const Messages = require('./Messages');

module.exports.startDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/chat', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        // const mes = new Messages({
        //     text: 'Hello from near chat',
        //     channel:'Dogs',
        // });
        // await mes.save();
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};
