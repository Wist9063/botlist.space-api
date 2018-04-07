# botlist.space-api    ![David-dm](https://david-dm.org/Wist9063/botlist.space-api.svg)
Used for interacting with botlist.space's api for node.js. 
***
![Greenkeeper badge](https://badges.greenkeeper.io/Wist9063/botlist.space-api.svg)     [![NPM](https://nodei.co/npm/botlist.space-api.png)](https://nodei.co/npm/botlist.space-api/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a8e83487b2a349aba7501bfc156060ea)](https://www.codacy.com/app/Wist9063/botlist.space-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Wist9063/botlist.space-api&amp;utm_campaign=Badge_Grade)

## Launch the API
To launch the API follow the text below:
```js
const botlistspaceapi = require('botlist.space-api')

const botlistapi = new botlistspaceapi('SomeKeyhere', 'SomeIDhere')
```

## Posting Non-Sharded & Sharded Bot Guild Count
To post guild count **without** shards follow the text below: ***Requires Auth***
```js
const botlistspaceapi = require('botlist.space-api')
const botlistapi = new botlistspaceapi('SomeKeyhere', 'SomeIDhere')

// Non-Sharded
botlistapi.postStats(313).catch(i => {
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
const botlistspaceapi = require('botlist.space-api')
const botlistapi = new BLSA('SomeKeyhere', 'SomeIDhere')

botlistapi.getWebsite().then(i => {
console.log(i)
});
```
**Returns:** `Array<bot>`
Check the link [here](https://botlist.space/api/bots). (Too big to show)

## Get a bot
To get a certain bot follow the text below:
```js
const botlistspaceapi = require('botlist.space-api')
const botlistapi = new botlistspaceapi('SomeKeyhere', 'SomeIDhere')

botlistapi.getBot('botID').then(i => { 
console.log(i)
});
```
**Returns:** `Object` | `HTTP Error 404`
```json
{
   "approved":true,
   "avatar":"af7003d9202cdaa7f34d8bfe1692cb58",
   "count":4686,
   "discriminator":"9124",
   "featured":true,
   "id":"275270122082533378",
   "invite":"https://discordapp.com/oauth2/authorize?&client_id=275270122082533378&scope=bot&permissions=52224",
   "library":"JDA",
   "name":"AvaIre",
   "owners":[
      {
         "avatar":"a_481940d7cd10bf30ef1776cd984e1e91",
         "discriminator":"0001",
         "id":"88739639380172800",
         "username":"Senither"
      }
   ],
   "prefix":"! (Customizable)",
   "shards":[
      957,
      956,
      950,
      922,
      901
   ],
   "shortDesc":"A high quality Music bot, with moderation, and much more!",
   "timestamp":1519416241735,
   "views":40
}
```
## Gets user's bots
To get a certain bot follow the text below:
```js
const botlistspaceapi = require('botlist.space-api')
const botlistapi = new botlistspaceapi('SomeKeyhere', 'SomeIDhere')

botlistapi.getUser('USERID').then(i => {
console.log(i)
});
```
**Returns:** `Object` | `HTTP Error 404` | `HTTP Error 400`
```json 
{
   "username":"Wistful__",
   "discriminator":"9063",
   "id":"166228540214214657",
   "bots":[
      {
         "approved":true,
         "avatar":"bda58186354c9abf7fdd9a16bfcdb14a",
         "count":263,
         "discriminator":"0473",
         "featured":true,
         "id":"341980888239702017",
         "invite":"https://discordapp.com/oauth2/authorize?client_id=341980888239702017&permissions=3492870&scope=bot",
         "library":"discord.js",
         "name":"Jennifer",
         "owners":[
            {
               "avatar":"53267463052415d58da178bb98c44cd2",
               "discriminator":"9063",
               "id":"166228540214214657",
               "username":"Wistful__"
            }
         ],
         "prefix":"j)",
         "shards":null,
         "shortDesc":"Jennifer, the new girl on the block. With multiple Moderation, Utility, Lookup, & Fun commands. (ITS NOT JUST A GIRL :D)",
         "timestamp":1517365990351,
         "views":67
      }
   ]
}
```

## Get stats
To get stats of the website follow the text below:
```js
const botlistspaceapi = require('botlist.space-api')
const botlistapi = new botlistspaceapi('SomeKeyhere', 'SomeIDhere')

botlistapi.Stats().then(i => { 
console.log(i)
});
```
**Returns:**  `Object`
```json
{
    "approvedBots": x,
    "unapprovedBots": x
}
```

## Get Upvotes
To get upvotes if it's a premium bot, follow the text below: ***Requires Auth***

```js
const botlistspaceapi = require('botlist.space-api')
const botlistapi = new botlistspaceapi('SomeKeyhere', 'SomeIDhere')

// To get non-IDs response 
botlistapi.getUpvotes('PremiumBotID').then(i => { 
console.log(i)
})

// To get ID Arrays response 
botlistapi.getUpvotes('PremiumBotID', true).then(i => { 
console.log(i)
})
```

**Returns:** `Object` | `Array<Id>` | `HTTP Error 403` | `HTTP Error 404` | `HTTP Error 400` 