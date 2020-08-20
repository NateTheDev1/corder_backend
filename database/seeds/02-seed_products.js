exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 0,
          category: "Tea",
          image:
            "https://www.biggby.com/wp-content/themes/biggby/assets/imgs/global/ghost-drink.png",
          price: 4.99,
          title: "Tea Latte",
        },
        {
          id: 1,
          category: "Coffee",
          image:
            "https://media.biggby.com/wp-content/uploads/2017/09/04194129/Coffee_Iced_NoCream_StrawLeft.png",
          price: 3.99,
          title: "Iced Coffee",
        },
        {
          id: 2,
          category: "Freeze",
          image:
            "https://media.biggby.com/wp-content/uploads/2017/01/04194317/CookieCreamCF.png",
          price: 7.99,
          title: "Chocolate Chip Cookie Chip Creme Freeze",
        },
      ]);
    });
};
