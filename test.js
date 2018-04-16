const botlistspaceapi = require('./index.js');
const Api = new botlistspaceapi()

Api.getBot('341980888239702017').then(i => { 
    console.log(i.name + '\nhas' + i.count + '\nguilds.')
    console.log(`ID: ${i.id}`)
    });