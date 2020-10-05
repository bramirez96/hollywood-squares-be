exports.up = function (knex) {
  return knex.schema.createTable('Questions', (t) => {
    t.increments('ID');
    t.string('Text').notNullable();
    t.string('ImgURL');
    t.string('Real').notNullable();
    t.string('Fake').notNullable();
    t.integer('Number').notNullable();
    t.integer('InstanceID')
      .notNullable()
      .unsigned()
      .references('Games.ID')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    t.unique(['InstanceID', 'Number']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('Questions');
};
