const botlistspaceapi = require('./index.js')
const api = new botlistspaceapi()

api.getBot('botID').then(i => { 
    console.log(i)
    });