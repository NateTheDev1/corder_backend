import { EROFS } from "constants";

const products = require("../../database/Models/Product");
const nutritiondb = require("../../database/Models/Nutrition");
const userdb = require("../../database/Models/User");
const ordersdb = require("../../database/Models/Order");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

require("dotenv").config();

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
    user: async (_: any, { id }: { id: string }) => {
      const user = await userdb.query().findById(id);
      console.log(user);
      return user;
    },
  },

  Mutation: {
    addUser: async (
      _: any,
      { username, password }: { username: string; password: string }
    ) => {
      const usercheck = await userdb.query().where({ username });

      console.log(usercheck);
      if (usercheck.length > 0) {
        throw new Error("Username already exists");
      }

      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(password, salt);

      if (usercheck <= 0) {
        const newUser = await userdb
          .query()
          .insert({ username, password: hash });
        const payload = {
          id: newUser.id,
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRET);
        return { ...newUser, token };
      }
    },
    login: async (
      _: any,
      { username, password }: { username: string; password: string }
    ) => {
      const user = await userdb.query().where({ username });

      if (user.length <= 0) {
        throw new Error("Password or username incorrect.");
      }

      const verified = await bcrypt.compareSync(password, user[0].password);

      if (!verified) {
        throw new Error("Password or username incorrect.");
      }

      const payload = {
        id: user.id,
      };

      const token = await jwt.sign(payload, process.env.JWT_SECRET);

      console.log(user[0]);

      return { ...user[0], token };
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

  User: {
    orders: async (parent: any) => {
      const orders = await ordersdb
        .query()
        .where("customer_id", "=", parent.id);
      return orders;
    },
  },
};

module.exports = { resolvers };
