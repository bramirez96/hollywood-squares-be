exports.up = function (knex) {
  return knex.schema.createTable('Games', (t) => {
    t.increments('ID');
    t.string('Title', 30).notNullable();
    t.boolean('Finished');
    t.string('WinningTeam', 1);
    t.integer('OwnerID')
      .notNullable()
      .unsigned()
      .references('Users.ID')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('Games');
};
