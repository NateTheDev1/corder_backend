exports.up = function (knex) {
  return knex.schema.createTable("nutrition", (tbl) => {
    tbl.increments();
    tbl.integer("calories").unsigned().notNullable();
    tbl.integer("fat").unsigned().notNullable();
    tbl.integer("cholesterol").unsigned().notNullable();
    tbl.integer("protein").unsigned().notNullable();
    tbl.integer("caffeine").unsigned().notNullable();
    tbl
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("nutrition");
};
