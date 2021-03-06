var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: '../data/migrations',
    },
    seeds: {
      directory: '../data/seeds',
    },
  },

  testing: {
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL,
    migrations: {
      directory: '../data/migrations',
    },
    seeds: {
      directory: '../data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: '../data/migrations',
    },
    seeds: {
      directory: '../data/seeds',
    },
  },
};
