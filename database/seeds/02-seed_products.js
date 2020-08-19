exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        { id: 0, category: "Tea", image: "", price: 4.99, title: "Iced Tea" },
        {
          id: 1,
          category: "Coffee",
          image: "",
          price: 3.99,
          title: "Iced Coffee",
        },
        {
          id: 2,
          category: "Freeze",
          image: "",
          price: 7.99,
          title: "Mint Chip Creme Freeze",
        },
      ]);
    });
};
