/* 
        botlist.space-api written in JavaScript. (node.js)
        https://github.com/Wist9063/botlist.space-api

        Author: Wist9063 - 2018
*/
// Consts and stuff
const eURL = 'https://botlist.space/api';
const request = require('request');
const snekfetch = require('snekfetch')

class botlistapi {
    constructor(authorization, botID) {
        if (authorization != null) {
            this.auth = authorization;
        } else {
            console.log("Please enter a valid botlist.space token to post stats.");
        };
        if (botID != null) {
            this.id = botID;
        } else {
            console.log("Please enter an ID to post stats.");
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
                        body = JSON.parse(body)
                        return resolve(body);
                    } catch (err) {
                        return reject(err);
                    }
                }
            );


        })
    };

    async getWebsite() {
        return new Promise((resolve, reject) => {
            request({
                    url: `${eURL}/bots/`,
                    headers: {
                        'User-Agent': 'botlist.space-api Request PKG'
                    }
                },
                function(error, response, body) {
                    try {
                        body = JSON.parse(body);
                        return resolve(body);
                    } catch (err) {
                        return reject(err);
                    }
                }
            );


        })
    };

    async postStats(guild) {
        return new Promise((resolve, reject) => {
            snekfetch.post(`${eURL}/bots/${this.id}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', this.auth)
            .send({"server_count": guild})
            .then(() => resolve('Guild Number sent'))
            .catch(err => reject(err))
        });
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
                        body = JSON.parse(body)
                        return resolve(body);
                    } catch (err) {
                        return reject(err);
                    }
                }
            );


        })
    };


};

module.exports = botlistapi;