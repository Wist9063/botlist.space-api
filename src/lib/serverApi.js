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
    if (typeof userKEY !== "string") {throw console.warn("A user key is needed to do most functions, please go to serverlist.space to get your user token.");}
    this._auth = userKEY;
    this.url = "https://api.serverlist.space/v1";
  }

  /**
   * Fetches information about a specific server.
   * 
   * @memberOf ServerlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data
   */

  getServer(id) {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/servers/${id}`, {header: { "Content-Type": "application/json", "Authorization": this._auth }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }

  /**
   * Fetches information about the site.
   * 
   * @memberOf ServerlistSpaceClient
   * @param {string} id 
   * @returns {promise} Returned data
   */

  getStats() {
    if (typeof id !== "string") {throw new TypeError("ID must be a string.");}

    return new Promise((resolve, reject) => {
      nodefetch(`${this.url}/statistics`, {header: { "Content-Type": "application/json", "Authorization": this._auth }})
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });

  }


}

module.exports = ServerlistSpaceClient;