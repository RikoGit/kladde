'use strict';

const PORT = process.env.PORT || 5000
const express = require(`express`);
const server = express();

server.set(`port`, PORT);

server.use(`/`, express.static(__dirname));

server.listen(PORT, () => {
  console.log(`Start server on port ${PORT}.`);
});