exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username").notNullable();
    tbl.string("password").notNullable();
    tbl.string("secret_key").defaultTo("admin_token");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
