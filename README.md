# H0B

## Installation

`npm i && npm start`

--parallel

./server `npm i && node app.js`

## Save your cred :

more secure :+1:

`echo 'export MJ_APIKEY_PUBLIC=MY_API_KEY' >> ~/.zshrc`

`echo 'export MJ_APIKEY_PRIVATE=MY_API_SECRET' >> ~/.zshrc`

`source .zshrc`

use it :

```node
var apiKey = process.env.MJ_APIKEY_PUBLIC,
    apiSecret = process.env.MJ_APIKEY_PRIVATE;
```
