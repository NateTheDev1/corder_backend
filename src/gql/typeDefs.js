"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var gql = require("apollo-server-express").gql;
var typeDefs = gql(__makeTemplateObject(["\n  type Query {\n    products: [Product]\n    product(id: ID!): Product\n  }\n\n  type Product {\n    id: ID!\n    category: String!\n    title: String!\n    nutrition: Nutrition!\n    image: String!\n    price: Float!\n  }\n\n  type Nutrition {\n    id: ID\n    product_id: Int\n    calories: Int\n    fat: Int\n    cholesterol: Int\n    protein: Int\n    caffeine: Int\n  }\n"], ["\n  type Query {\n    products: [Product]\n    product(id: ID!): Product\n  }\n\n  type Product {\n    id: ID!\n    category: String!\n    title: String!\n    nutrition: Nutrition!\n    image: String!\n    price: Float!\n  }\n\n  type Nutrition {\n    id: ID\n    product_id: Int\n    calories: Int\n    fat: Int\n    cholesterol: Int\n    protein: Int\n    caffeine: Int\n  }\n"]));
module.exports = { typeDefs: typeDefs };
