require("dotenv").config();

// Server i\Initialization
const express = require("express");
const server = express();

// Standard Middleware Imports
const cors = require("cors");
const helmet = require("helmet");

// Middleware Addition
server.use(cors());
server.use(helmet());
server.use(express.json());

module.exports = server;
