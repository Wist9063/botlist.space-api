const botlistspaceapi = require('./index.js');
const Api = new botlistspaceapi()

Api.getBot('341980888239702017').then(i => { 
    console.log(i.name + ' has ' + i.count + ' guilds.')
    console.log(`ID: ${i.id}`)
    });