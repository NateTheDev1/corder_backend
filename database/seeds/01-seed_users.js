exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "AdminUser",
          password:
            "$2a$10$BdmaR5i14IScz.Y7MfWJAOnEMdN6YV5xf3vcIMfSTKVS/leL3jszi",
        },
      ]);
    });
};
