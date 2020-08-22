exports.up = function (knex) {
  return knex.schema.createTable("orders", (tbl) => {
    tbl.increments();
    tbl.string("order_info").notNullable();
    tbl
      .integer("customer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.float("total").notNullable();
    tbl.string("date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orders");
};
