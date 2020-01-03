'use strict';

const express = require(`express`);
const {join} = require('path');

const PORT = process.env.PORT || 5000;
const server = express();

server.set(`port`, PORT);

server.use(`/`, express.static(join(__dirname, 'static')));
