const botlistspaceapi = require("./src/index.js");
const Api = new botlistspaceapi.botlistAPI("null");

Api.getBot("341980888239702017").then(i => { 
  console.log("Botlist: " + JSON.stringify(i));
});

const aa = new botlistspaceapi.serverlistAPI("null");

aa.getServer("387812458661937152").then(i => { 
  console.log("Serverlist: " + JSON.stringify(i));
});