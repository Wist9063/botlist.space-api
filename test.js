const botlistspaceapi = require('./index.js');
const Api = new botlistspaceapi('xx', '341980888239702017')

Api.getThisBot().then(i => { 
    console.log(i.name + ' has ' + i.count + ' guilds.')
    console.log(`ID: ${i.id}`)
    });