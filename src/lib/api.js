/**
 * @file api main file
 * @author wist9063 <https://hexaplexsoftware.ga/wist>
 * @license MIT License
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

function checkErrors(res) {
  if (res.success) {
    return res.json();
  } else {
    return res.message;
  }
}

class BotlistSpaceClient {
  constructor(token, id) {
    this._id = id || null;
    this.auth = token || null;
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
        .then(res => checkErrors(res))
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
    if (typeof guild !== "string" && !(guild instanceof Array)) {throw new TypeError("Guild count is not a number or shard array.");}

    return new Promise((resolve, reject) => {
      let count;
      if (guild instanceof Array) {count = {"shards": guild};}
      else {count = {"server_count": guild};}
      count = JSON.stringify(count);

      nodefetch(`${this.url}/bots/${this._id}`, {method: "POST", body: {count}, header: { "Content-Type": "application/json", "Authorization": this.auth }})
        .then(res => res.json())
        .then(json => resolve(json))
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