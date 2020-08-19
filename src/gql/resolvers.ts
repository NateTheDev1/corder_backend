const products = require("../../database/Models/Product");

const resolvers = {
  Query: {
    products: async () => {
      const productsData: Array<Object> = await products.query();
      return productsData;
    },
  },
};

module.exports = { resolvers };
