/* 
        botlist.space-api written in JavaScript. (node.js)
        https://github.com/Wist9063/botlist.space-api

        Author: Wist9063 - 2018
*/
// Consts and stuff
const eURL = 'https://botlist.space/api';
const request = require('request');

class botlistapi {
    constructor(authorization, botID) {
        if (authorization != null) {
            this.auth = authorization;
        } else {
            console.log("Please enter a valid botlist.space token.");
        };
        if (botID != null) {
            this.id = botID;
        } else {
            console.log("Please enter an ID.");
        };
    }

    async getBot(id) {
        return new Promise((resolve, reject) => {
            if (!id) return reject('Please enter an ID.')
            request({
                    url: `${eURL}/bots/${id}`,
                    headers: {
                        'User-Agent': 'botlist.space-api Request PKG'
                    }
                },
                function(error, response, body) {
                    try {
                        return resolve(JSON.parse(body));
                    } catch (err) {
                        return reject(err);
                    }
                }
            );


        })
    };

    async getWebsite() {
        return new Promise((resolve, reject) => {
            if (!id) return reject('Please enter an ID.')
            request({
                    url: `${eURL}/bots/${id}`,
                    headers: {
                        'User-Agent': 'botlist.space-api Request PKG'
                    }
                },
                function(error, response, body) {
                    try {
                        return resolve(JSON.parse(body));
                    } catch (err) {
                        return reject(err);
                    }
                }
            );


        })
    };

    async postGuild(guildNum, shardChoice) {
        return new Promise((resolve, reject) => {
            if (shardChoice != null) {

                if (shardChoice === true) {
                    if (guildNum == null) {
                        console.log('Please enter a shard count.')
                    }
                    request.post({
                            url: `${eURL}/bots/${id}`,
                            headers: {
                                'User-Agent': 'botlist.space-api Request PKG',
                                'content-type': 'application/json',
                                "Authorization": this.auth
                            },
                            body: JSON.stringify({
                                'shards': shardCount
                            })
                        },
                        function(error, response, body) {
                            try {
                                return resolve(JSON.parse(body));
                            } catch (err) {
                                return reject(err);
                            }
                        }
                    );
                } else {
                    request.post({
                            url: `${eURL}/bots/${id}`,
                            headers: {
                                'User-Agent': 'botlist.space-api Request PKG',
                                'content-type': 'application/json',
                                "Authorization": this.auth
                            },
                            body: JSON.stringify({
                                'shards': shardCount
                            })
                        },
                        function(error, response, body) {
                            try {
                                return resolve(JSON.parse(body));
                            } catch (err) {
                                return reject(err);
                            }
                        }
                    );
                }
            };
        })
    };

    async getUser(id) {
        return new Promise((resolve, reject) => {
            if (!id) return reject('Please enter an ID.')
            request({
                    url: `${eURL}/user/${id}`,
                    headers: {
                        'User-Agent': 'botlist.space-api Request PKG'
                    }
                },
                function(error, response, body) {
                    try {
                        return resolve(JSON.parse(body));
                    } catch (err) {
                        return reject(err);
                    }
                }
            );


        })
    };


};

module.exports = botlistapi;