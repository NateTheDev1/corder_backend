const Knex = require("knex");
const connection = require("../connection");
const { Model } = require("objection");

Model.knex(connection);

class Product extends Model {
  static get tableName() {
    return "products";
  }
}

module.exports = Product;
