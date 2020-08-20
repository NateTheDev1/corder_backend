const Knex = require("knex");
const connection = require("../connection");
const { Model } = require("objection");

Model.knex(connection);

class Nutrition extends Model {
  static get tableName() {
    return "nutrition";
  }
}

module.exports = Nutrition;
