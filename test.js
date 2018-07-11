const botlistspaceapi = require("./src/index.js");
const Api = new botlistspaceapi.api("xx", "341980888239702017");

Api.getBot("341980888239702017").then(i => { 
  console.log(i.name + " has " + i.count + " guilds.");
  console.log(`ID: ${i.id}`);
});