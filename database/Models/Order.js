const Knex = require("knex");
const connection = require("../connection");
const { Model } = require("objection");

Model.knex(connection);

class Order extends Model {
  static get tableName() {
    return "orders";
  }
}

module.exports = Order;
