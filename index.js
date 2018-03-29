/* Consts and stuff */
const eURL = 'https://botlist.space/api';
const request = require('request');

function api(authorization, botID) {
    this.auth = authorization;
    this.id = botID;
}
/* Gets stats of another bot */
api.prototype.getBot = function(id) {
    return new Promise((resolve, reject) => {
        request({
            url: eURL + '/bots/' + id,
            headers: {
                'User-Agent': 'botlist.space-API pkg (https://github.com/Wist9063/botlist.space-api)'
            }
        }, function(er, response, body) {
            if (er) return reject(er);
            return resolve(JSON.parse(body));
        });
    });
};
/* Gets entire list of bots */
api.prototype.getWebsite = function() {
    return new Promise((resolve, reject) => {
        request({
            url: eURL + '/bots/',
            headers: {
                'User-Agent': 'botlist.space-API pkg (https://github.com/Wist9063/botlist.space-api)'
            }
        }, function(er, response, body) {
            if (er) return reject(er);
            return resolve(JSON.parse(body));
        });
    });
};
/* Gets a user */
api.prototype.getUser = function(id) {
    return new Promise((resolve, reject) => {
        request({
            url: eURL + '/users/' + id,
            headers: {
                'User-Agent': 'botlist.space-API pkg (https://github.com/Wist9063/botlist.space-api)'
            }
        }, function(er, response, body) {
            if (er) return reject(er);
            return resolve(JSON.parse(body));
        });
    });
};
/* Gets Upvotes Premium Needed */
api.prototype.getUpvotesID = function(id) {
    return new Promise((resolve, reject) => {
        request({
            url: eURL + '/bots/' + id + '?ids=true',
            headers: {
                'User-Agent': 'botlist.space-API pkg (https://github.com/Wist9063/botlist.space-api)',
                "Authorization": this.auth
            }
        }, function(er, response, body) {
            if (er) return reject(er);
            if (response = '403') return reject(
                'Premium bots only.')
            return resolve(JSON.parse(body));
        });
    });
};
api.prototype.postStats = function(guildCount) {
    return new Promise((resolve, reject) => {
        request.post({
            url: eURL + '/bots/' + this.id,
            headers: {
                'User-Agent': 'botlist.space-API pkg (https://github.com/Wist9063/botlist.space-api)',
                'content-type': 'application/json',
                "Authorization": this.auth
            },
            body: JSON.stringify({
                'guild_count': guildCount
            })
        }, function(er, response, body) {
            if (!JSON.parse(body).error) {
                resolve();
            } else {
                reject(JSON.parse(body).message);
            }
        });
    })
};
api.prototype.postShardStats = function(shardCount) {
    return new Promise((resolve, reject) => {
        request.post({
            url: eURL + '/bots/' + this.id,
            headers: {
                'User-Agent': 'botlist.space-API pkg (https://github.com/Wist9063/botlist.space-api)',
                'content-type': 'application/json',
                "Authorization": this.auth
            },
            body: JSON.stringify({
                'shards': shardCount
            })
        }, function(er, response, body) {
            if (!JSON.parse(body).error) {
                resolve();
            } else {
                reject(JSON.parse(body).message);
            }
        });
    })
};
exports = api;