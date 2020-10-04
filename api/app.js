require('dotenv').config();

// Server i\Initialization
const express = require('express');
const server = express();

// Standard Middleware Imports
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

// Middleware Addition
server.use(
  cors({
    origin: '*',
  })
);
server.use(helmet());
server.use(express.json());
server.use(logger('dev'));

// Router Imports
const indexRouter = require('./index/indexRouter');
const authRouter = require('./auth/authRouter');
const gameRouter = require('./game/gameRouter');

// Router Additions
server.use('/', indexRouter);
server.use('/', authRouter);
server.use(['/game', '/games'], gameRouter);

module.exports = server;
