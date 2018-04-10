/* 
        botlist.space-api written in JavaScript. (node.js)
        https://github.com/Wist9063/botlist.space-api

        Author: Wist9063 - 2018
        Wist9063/botlist.space-api is licensed under the MIT License

        ****

        MIT License

        Copyright (c) 2018 Wist9063

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
*/

// Consts and stuff
const request = require('request');
const snekfetch = require('snekfetch') // Used of posting stats

/**
 * Creates a new api connection.
 * 
 * @class botlistapi
 * @constructor
 * @param {String} authorization The authorization provided from the bot's token page.
 * @param {String} botID The ID of the bot.
 */
class botlistapi {
    constructor(authorization, botID) {
        if (authorization != null) {
            this.auth = authorization;
        } else {
            console.log("Please enter a valid botlist.space token to post stats.");
        }
        if (botID != null) {
            this.id = botID;
        } else {
            console.log("Please enter an ID to post stats.");
        };
        this._eURL = 'https://botlist.space/api';
    }

    /**
     * Retrieves information about a specific bot.
     * @returns {Promise} The returned data.
     * @memberof botlistapi
     * @param {String} The ID of the bot you want to get information on.
     */
    async getBot(id) {
        if (typeof id !== 'string') {
            throw new TypeError("Bot ID is not a string");
        };
        return new Promise((resolve, reject) => {
            if (!id) {return reject('Please enter an ID.')};
            request({
                    url: `${this._eURL}/bots/${id}`,
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


        });
    };

    /**
     * Gets all bots from the site.
     * @returns {Promise} The returned data.
     * @memberof botlistapi
     */
    async getWebsite() {
        return new Promise((resolve, reject) => {
            request({
                    url: `${this._eURL}/bots/`,
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

    /**
     * Posts server count to the site.
     * @returns {Promise} The returned data.
     * @memberof botlistapi
     * @param {Array | Integer} count The server count, or array of server count as shards.
     */
    async postStats(guild) {
        if (typeof guild !== 'number' && !(guild instanceof Array)) {
            throw new TypeError("Server count is not a number or shards array. (NaN)")
        };
        return new Promise((resolve, reject) => {
            let data;
            if (guild instanceof Array) {
                data = {
                    "shards": guild
                };
            } else {
                data = {
                    "server_count": guild
                };
            };
            snekfetch.post(`${this._eURL}/bots/${this.id}`)
                .set('Content-Type', 'application/json')
                .set('Authorization', this.auth)
                .set('User-Agent', 'botlist.space-api Request PKG')
                .send(data)
                .then(() => resolve("Guild Number sent"))
                .catch(err => reject(err))
        });
    };

    /**
     * Gets information about a specific bot.
     * @returns {Promise} The returned data.
     * @memberof botlistapi
     * @param {String} id The ID of the bot you want to get information on.
     */
    async getUser(id) {
        if (typeof id !== 'string') {
            throw new TypeError('User ID is not a string')
        };
        return new Promise((resolve, reject) => {
            if (!id) return reject('Please enter an ID.')
            request({
                    url: `${this._eURL}/user/${id}`,
                    headers: {
                        'User-Agent': "botlist.space-api Request PKG"
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

    /**
     * Gets the stats from the website.
     * @returns {Promise} The returned data.
     * @memberof botlistapi
     */
    async getStats() {
        return new Promise((resolve, reject) => {
            request({
                    url: `${this._eURL}/stats/`,
                    headers: {
                        'User-Agent': "botlist.space-api Request PKG"
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

   /**
     * Gets upvotes about a specific premium bot.
     * @returns {Promise} The returned data.
     * @memberof botlistapi
     * @param {String} id The ID of the bot you want to get information on.
     * @param {boolean} choice The choice if you want to get IDs or objects.
     */
    async getUpvotes(id, choice) {
        if (typeof id !== 'string') {
            throw new TypeError("User ID is not a string")
        };
        return new Promise((resolve, reject) => {

            if (choice != null) {
                if (choice == true) {
                    request({
                            url: `${this._eURL}/bots/${id}/upvotes?ids=true`,
                            headers: {
                                'User-Agent': "botlist.space-api Request PKG"
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
                }
            }

            if (choice === null || choice === false)  {
                request({
                        url: `${this._eURL}/bots/${id}/upvotes`,
                        headers: {
                            'User-Agent': "botlist.space-api Request PKG"
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
            }
        })
    };


};

module.exports = botlistapi;