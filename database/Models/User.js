const Knex = require("knex");
const connection = require("../connection");
const { Model } = require("objection");

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class User extends Model {
  static get tableName() {
    return "users";
  }
}

module.exports = User;
