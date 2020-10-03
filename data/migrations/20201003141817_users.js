exports.up = function (knex) {
  return knex.schema.createTable('Users', (t) => {
    t.increments('ID');
    t.string('Username').notNullable().index().unique();
    t.string('Password').notNullable();
    t.string('FirstName');
    t.string('LastName');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('Users');
};
