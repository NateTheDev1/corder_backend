const Knex = require("knex");
const connection = require("../connection");
const { Model } = require("objection");

Model.knex(connection);

class User extends Model {
  static get tableName() {
    return "users";
  }
}

module.exports = User;
