/**
 *       @copyright
 *       botlist.space-api written in JavaScript. (node.js)
 *       https://github.com/Wist9063/botlist.space-api
 *
 *       @author Wist9063 <https://hexaplexsoftware.ga/wist>
 *       Wist9063/botlist.space-api is licensed under the MIT License
 *
 *       ****
 *       @license Wist9063/botlist.space-api is licensed under the MIT License
 * 
 *       MIT License
 *
 *       Copyright (c) 2018 Wist9063
 *
 *       Permission is hereby granted, free of charge, to any person obtaining a copy
 *       of this software and associated documentation files (the "Software"), to deal
 *       in the Software without restriction, including without limitation the rights
 *       to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *       copies of the Software, and to permit persons to whom the Software is
 *       furnished to do so, subject to the following conditions:
 *
 *       The above copyright notice and this permission notice shall be included in all
 *       copies or substantial portions of the Software.
 *
 *       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *       SOFTWARE.
 */

const nodefetch = require("node-fetch");

/**
 * Create a new api
 * 
 * @class BotlistSpaceClient
 * @constructor
 * @param {string} token The token provided from the bot's page.
 * @param {string} id ID from the bot.
 */

class BotlistSpaceClient {
  constructor(token, id) {
    if (typeof token != "string") throw new TypeError("Token has to be a string.");
    if (typeof id != "string") throw new TypeError("ID has to be a string.");
    this._id = id;
    this.auth = token;
    this.url = "https://botlist.space/api";
  }

  /**
   * Fetches information about a specific bot.
   * 
   * @memberOf BotlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data
   */

  getBot(id) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/bots/${id}`)
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Fetches info about a user.
   * 
   * @memberOf BotlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data.
   */

  getUser(id) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/user/${id}`)
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Gets stats about approved and unapproved bots.
   * 
   * @memberOf BotlistSpaceClient
   * @returns {promise} Returned data.
   */

  getStats() {

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/stats/`)
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Post guild count to the site.
   * 
   * @memberOf BotlistSpaceClient
   * @param {number | array} guild Guild count or array of guilds from shards
   * @returns {promise} Returned data
   */

  postStats(guild) {
    if (typeof guild !== "number" && !(guild instanceof Array)) {throw new TypeError("Guild count is not a number or shard array.");}

    return new Promise((resolve, reject) => {
      let count;
      if (guild instanceof Array) {count = {"shards": guild};}
      else {count = {"server_count": guild};}

      nodefetch(`${this.url}/bots/${this._id}`, {method: "POST", body: count, header: { "Content-Type": "application/json", "Authorization": this.auth }})
        .then(() => resolve("Guild count successfully sent."))
        .catch(err => reject(err));
    });

  }

  /**
   * Gets upvote from your bot.
   * 
   * @memberOf BotlistSpaceClient
   * @param {boolean} [showIDs = true]
   * @returns {promise} Returned data
   */

  getUpvotes(showIDs = true) {
    if (typeof showIDs !== "boolean") {throw new TypeError("showIDs must be a boolean");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/bots/${this._id}/upvotes?ids=${showIDs}`, {header: { "Content-Type": "application/json", "Authorization": this.auth }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });


  }


}

module.exports = BotlistSpaceClient;