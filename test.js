const botlistspaceapi = require("./src/index.js");
const Api = new botlistspaceapi.botlistAPI("xx", "341980888239702017");

Api.getBot("341980888239702017").then(i => { 
  console.log(i);
});