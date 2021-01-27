const request = require('request');

function getMessages(req, res) {
    let path, apiOptions;
    path = `/api/messages/${req.params.channel}`;
    apiOptions = {
        url: 'http://localhost:3000' + path,
        method: 'GET',
        json:{}
    };
    return new Promise((resolve, reject) => {
        request(apiOptions, (err, res) => {
            if(err) {
                reject(err)
            }
            resolve(res.body)
        })
    });
}

module.exports.loadChatMessages = async (req, res) => {
    try {
        const loadData = await getMessages(req, res);
        const messages = JSON.stringify(loadData.messages);
        res.redirect(`/chat/${messages}/channel/${req.params.channel}`)
    } catch (e) {
        
    }
};