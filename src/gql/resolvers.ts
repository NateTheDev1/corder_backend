const products = require("../../database/Models/Product");
const nutritiondb = require("../../database/Models/Nutrition");

const resolvers = {
  Query: {
    products: async () => {
      const productsData: Array<Object> = await products.query();
      return productsData;
    },
    product: async (_: any, { id }: { id: string }) => {
      const productData: Object = await products.query().findById(id);
      return productData;
    },
  },

  Product: {
    nutrition: async (parent: any) => {
      const nutritionData = await nutritiondb
        .query()
        .select("*")
        .where("product_id", "=", parent.id)
        .first();
      console.log(nutritionData);
      return nutritionData;
    },
  },
};

module.exports = { resolvers };
