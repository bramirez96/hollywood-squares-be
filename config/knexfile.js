// Update with your config settings.
module.exports = {
    development: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "../data/migrations",
        },
        seeds: {
            directory: "../data/seeds",
        },
    },

    production: {
        client: "pg",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
