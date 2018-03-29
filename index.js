/* Consts and stuff */
const eURL = 'https://botlist.space/api';
const request = require('request');

class botlistapi {
constructor(authorization, botID) {
if (authorization != null) {this.auth = authorization} else {console.log('Please enter a valid botlist.space token.')};
if (botID != null ) {this.id = botID} else {console.log('Please enter a id.')};
}

/* Gets stats of another bot */
getBot(id) {
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
    }).catch(() => { return reject(`No bot was found matching the ID ${id}.`); })
};
/* Gets entire list of bots */
getWebsite() {
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
getUser(id) {
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
getUpvotesID(id) {
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
postStats(guildCount) {
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
    }).catch((i) => { return reject(`Error: ${i}`); })
};
postShardStats(shardCount) {
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

};

module.exports = botlistapi;

