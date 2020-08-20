exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("nutrition")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("nutrition").insert([
        {
          id: 0,
          product_id: 0,
          calories: 10,
          fat: 10,
          cholesterol: 10,
          protein: 10,
          caffeine: 10,
        },
        {
          id: 1,
          product_id: 1,
          calories: 10,
          fat: 10,
          cholesterol: 10,
          protein: 10,
          caffeine: 10,
        },
        {
          id: 2,
          product_id: 2,
          calories: 10,
          fat: 10,
          cholesterol: 10,
          protein: 10,
          caffeine: 10,
        },
      ]);
    });
};
