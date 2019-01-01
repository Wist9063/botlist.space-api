
# botlist.space-api    ![David-dm](https://david-dm.org/Wist9063/botlist.space-api.svg) [![Build Status](https://travis-ci.org/Wist9063/botlist.space-api.svg?branch=master)](https://travis-ci.org/Wist9063/botlist.space-api)

[![NPM](https://nodei.co/npm/botlist.space-api.png)](https://nodei.co/npm/botlist.space-api/)<br>
Well documented, Light-Weight API Library Wrapper for botlist.space. Written in JavaScript(Node.js).
***
![Greenkeeper badge](https://badges.greenkeeper.io/Wist9063/botlist.space-api.svg)<br>
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a8e83487b2a349aba7501bfc156060ea)](https://www.codacy.com/app/Wist9063/botlist.space-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Wist9063/botlist.space-api&amp;utm_campaign=Badge_Grade)<br>

## Launch the API
To launch the API follow the text below:
```js
const botlistspaceapi = require('botlist.space-api')

const botlistapi = new botlistspaceapi.botlistAPI('YourKeyhere', 'BotIDhere')
```

## Posting Non-Sharded & Sharded Bot Guild Count
To post guild count **without** shards follow the text below: ***Requires Auth***
```js
// Non-Sharded
botlistapi.postStats(bot.guilds.size).catch(i => {
console.log(i)
});

// Sharded
botlistapi.postStats(ShardArrayHere).catch(i => {
console.log(i)
});
```
**Returns:** `Object` | `HTTP Error 403` | `HTTP Error 404` | `HTTP Error 400`

## Get Entire List of bots
To get the entire list of bots on the website follow the text below:
```js
botlistapi.getWebsite().then(i => {
console.log(i)
});
```
**Returns:** `Array<bot>`
Check the link [here](https://botlist.space/api/bots). (Too big to show)

## Get a bot
To get a certain bot follow the text below:
```js
botlistapi.getBot('botID').then(i => { 
console.log(i)
});
```
**Returns:** `Object` | `HTTP Error 404`
## Gets user's bots
To get a certain bot follow the text below:
```js
botlistapi.getUser('USERID').then(i => {
console.log(i)
});
```
**Returns:** `Object` | `HTTP Error 404` | `HTTP Error 400`


## Get stats
To get stats of the website follow the text below:
```js
botlistapi.getStats().then(i => { 
console.log(i)
});
```
**Returns:**  `Object`

## Get Upvotes
To get upvotes if it's a premium bot, follow the text below: ***Requires Auth***

```js
botlistapi.getUpvotes(true).then(i => { 
// This is to get the IDs, if you would not like to get IDs then just change it to false.
console.log(i)
})
```

**Returns:** `Array<Object>` | `Array<Id>` | `HTTP Error 403` | `HTTP Error 404` | `HTTP Error 400` 
