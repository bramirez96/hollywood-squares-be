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
const questionsRouter = require('./question/questionRouter');

// Router Additions
server.use('/', indexRouter);
server.use('/', authRouter);
server.use(['/game', '/games'], gameRouter);
server.use(['/question', '/questions'], questionsRouter);

module.exports = server;
