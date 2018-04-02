const botlistspaceapi = require('./index.js')
const api = new botlistspaceapi()

api.getBot('341980888239702017').then(i => { 
    console.log(i)
    });