const request = require('request');

const apiOptionsGlobal = {
    server: 'http://localhost:3000'
};

function getUsers(req, res) {
    let path, apiOptions;
    path = '/api/users';
    apiOptions = {
        url: apiOptionsGlobal.server + path,
        method: 'GET',
        json: {},
    };
    return new Promise((resolve, reject) => {
        request(apiOptions, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res.body);
        });
    });
}

function getChannels(req, res) {
    let path, apiOptions;
    path = '/api/channels';
    apiOptions = {
        url: apiOptionsGlobal.server + path,
        method: 'GET',
        json: {}
    };
    return new Promise(((resolve, reject) => {
        request(apiOptions, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res.body);
        })
    }));
}

function createChatTimeFormat(date) {
    return new Date(date).toDateString()
}

module.exports.chatMainPage = (req, res) => {
    res.redirect(`/chat/load/Main`);
};


module.exports.chatMessages = async (req, res) => {
    const users = await getUsers(req, res);
    const channels = await getChannels(req, res);
    const messages = JSON.parse(req.params.messages);
    for (let i = 0; i < messages.length; i++) {
        messages[i].createDate = createChatTimeFormat(messages[i].createDate);
    }
    res.render('chat', {
        channels: channels,
        users: users,
        username: 'Stas Krasev',
        messages: messages,
        nowChannel: req.params.now
    })

};

module.exports.addNewMessage = (req, res) => {
    let path, apiOptions;
    path =`/api/messages/${req.body.userMessage}/${req.params.now}`;
    apiOptions = {
      url:apiOptionsGlobal.server + path,
      method:'GET',
      json:{}
    };
    request(apiOptions, (err, res) => {
       console.log(res.body);
    });
    res.redirect(`/chat/load/${req.params.now}`);
};