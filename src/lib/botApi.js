/**
 * @file botApi main file
 * @author wist9063 <https://hexaplexsoftware.ga/wist>
 * @license MIT License
 */

const nodefetch = require("node-fetch");

/**
 * Create a new api
 * 
 * @class BotlistSpaceClient
 * @constructor
 * @param {string} token The token provided from the user's page.
 */

class BotlistSpaceClient {
  constructor(userKEY) {
    if (typeof userKEY !== "string") {throw console.warn("A user key is needed to do most functions, please go to botlist.space to get your user token or else the function's use will be limited.");}
    this.auth = userKEY;
    this.url = "https://api.botlist.space/v1";
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
      nodefetch(`${this.url}/bots/${id}`, { headers: { "Authorization": this.auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }
   
  /**
   * Fetches ALL bots on the website per page.
   * 
   * @memberOf BotlistSpaceClient
   * @returns {promise} Returned data
   */

  getALLBots(pageNumb) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    pageNumb = pageNumb || 1;
    if (typeof pageNumb !== "number") {throw new TypeError("pageNumb is not a number.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/bots`, { headers: { "Authorization": this.auth, page: pageNumb, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
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
      nodefetch(`${this.url}/user/${id}`, { headers: { "Authorization": this.auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Fetches info about the user's bots.
   * 
   * @memberOf BotlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data.
   */

  getUserBot(id) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/user/${id}/bots`, { headers: { "Authorization": this.auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
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
      nodefetch(`${this.url}/statistics/`, { headers: { "Authorization": this.auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
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
   * @param {string} auth The key from your bot's page
   * @returns {promise} Returned data
   */

  postStats(guild, auth, id) {
    if (typeof guild !== "string" && !(guild instanceof Array)) {throw new TypeError("Guild count is not a string or shard array.");}
    if (typeof auth !== "string") {throw new TypeError("Bot key is not a string.");}
    if (typeof id !== "string") {throw new TypeError("ID is not a string.");}

    return new Promise((resolve, reject) => {
      let count;
      if (guild instanceof Array) {count = {"shards": guild};}
      else {count = {"server_count": guild};}
      count = JSON.stringify(count);

      nodefetch(`${this.url}/bots/${id}`, { method: "POST", body: { count }, headers: { "Content-Type": "application/json", "Authorization": auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Gets upvote from your bot.
   * 
   * @memberOf BotlistSpaceClient
   * @param {string} pageNumb Page Number
   * @param {string} auth The key from your bot's page
   * @returns {promise} Returned data
   */

  getUpvotes(pageNumb, auth, id) {
    if (typeof auth !== "string") {throw new TypeError("Bot key is not a string.");}
    if (typeof id !== "string") {throw new TypeError("ID is not a string.");}

    pageNumb = pageNumb || 1;
    if (typeof pageNumb !== "number") {throw new TypeError("pageNumb is not a number.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/bots/${id}/upvotes`, { headers: { "Content-Type": "application/json", "Authorization": auth, page: pageNumb, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

}

module.exports = BotlistSpaceClient;