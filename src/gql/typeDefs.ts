const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Product {
    id: ID!
    category: String!
    title: String!
    # nutrition: Nutrition!
    image: String!
    price: Float!
  }

  type Nutrition {
    id: ID!
    calories: Int!
    fat: Int!
    cholesterol: Int!
    protein: Int!
    caffeine: Int!
  }
`;

module.exports = { typeDefs };
