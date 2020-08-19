exports.up = function (knex) {
  return knex.schema.createTable("products", (tbl) => {
    tbl.increments();
    tbl.string("category").notNullable();
    tbl.string("image").notNullable();
    tbl.float("price").notNullable();
    tbl.string("title").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
