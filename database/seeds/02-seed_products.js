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
        {
          id: 3,
          category: "Latte",
          image:
            "https://media.biggby.com/wp-content/uploads/2017/01/04194319/MochaCaramelHot.png",
          price: 7.99,
          title: "Black Forest Latte",
        },
        {
          id: 4,
          category: "Latte",
          image:
            "https://media.biggby.com/wp-content/uploads/2017/01/04194318/CaramelTop_g_h.png",
          price: 6.99,
          title: "Buttercup Latte",
        },
        {
          id: 5,
          category: "Latte",
          image:
            "https://media.biggby.com/wp-content/uploads/2017/01/04194318/MellowTop_g_h.png",
          price: 6.99,
          title: "Gingersnap Latte",
        },
        {
          id: 6,
          category: "Freeze",
          image:
            "https://media.biggby.com/wp-content/uploads/2017/01/04193913/StrawberryShortcake_CF.png",
          price: 7.99,
          title: "Strawberry Shortcake Creme Freeze",
        },
        {
          id: 7,
          category: "Freeze",
          image:
            "https://media.biggby.com/wp-content/uploads/2017/01/04194315/RedBullCF.png",
          price: 7.99,
          title: "Red Bull Creme Freeze",
        },
      ]);
    });
};
