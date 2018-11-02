// server/index.js
'use strict';

const app = require('./app');
const server = require('./server');
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
debugger;
//API server is running on 8080
server.listen(8080, () => {
    console.log('Magic happens on port 8080');
});
