/**
 * @file serverApi main file
 * @author wist9063 <https://hexaplexsoftware.ga/wist>
 * @license MIT License
 */

const nodefetch = require("node-fetch");

/**
 * Create a new api
 * 
 * @class ServerlistSpaceClient
 * @constructor
 * @param {string} token The token provided from the user's page.
 */

class ServerlistSpaceClient {
  constructor(userKEY) {
    if (typeof userKEY !== "string") {throw console.warn("A user key is needed to do most functions, please go to serverlist.space to get your user token or else the function's use will be limited.");}
    this._auth = userKEY;
    this.url = "https://api.serverlist.space/v1";
  }

  /**
   * Fetches information about a specific server by ID.
   * 
   * @memberOf ServerlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data
   */

  getServer(id) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/servers/${id}`, {header: { "Content-Type": "application/json", "Authorization": this._auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Fetches ALL servers on the website per page.
   * 
   * @memberOf ServerlistSpaceClient
   * @param {string} pageNumb Number of page
   * @returns {promise} Returned data
   */

  getALLServers(pageNumb) {

    pageNumb = pageNumb || 1;
    if (typeof pageNumb !== "number") {throw new TypeError("pageNumb is not a number.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/servers/`, {header: { "Content-Type": "application/json", "Authorization": this._auth, page: pageNumb, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }
  
  /**
   * Fetches information about the site.
   * 
   * @memberOf ServerlistSpaceClient
   * @returns {promise} Returned data
   */

  getStats() {

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/statistics`, {header: { "Content-Type": "application/json", "Authorization": this._auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Fetches user by id.
   * 
   * @memberOf ServerlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data
   */

  getUser(id) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/users/${id}`, {header: { "Content-Type": "application/json", "Authorization": this._auth, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Fetches user's servers by ID.
   * 
   * @memberOf ServerlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data
   */

  getUserServers(id, pageNumb) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    pageNumb = pageNumb || 1;
    if (typeof pageNumb !== "number") {throw new TypeError("pageNumb is not a number.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/users/${id}/servers`, {header: { "Content-Type": "application/json", "Authorization": this._auth, page: pageNumb, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Gets upvote from your server.
   * 
   * @memberOf ServerlistSpaceClient
   * @param {string} pageNumb Page Number
   * @param {string} auth The key from your server's page
   * @returns {promise} Returned data
   */

  getUpvotes(pageNumb, auth, id) {
    if (typeof auth !== "string") {throw new TypeError("Server key is not a string.");}
    if (typeof id !== "string") {throw new TypeError("ID is not a string.");}

    pageNumb = pageNumb || 1;
    if (typeof pageNumb !== "number") {throw new TypeError("pageNumb is not a number.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/servers/${id}/upvotes`, { headers: { "Content-Type": "application/json", "Authorization": auth, page: pageNumb, "User-Agent": "botlist.space-api (https://www.npmjs.com/package/botlist.space-api)" } })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

}

module.exports = ServerlistSpaceClient;