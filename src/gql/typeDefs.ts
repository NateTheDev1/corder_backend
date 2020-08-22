const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    products: [Product]
    product(id: ID!): Product
    user(id: ID!): User
    orders(customer_id: ID!): [Order]
  }

  type Product {
    id: ID!
    category: String!
    title: String!
    nutrition: Nutrition!
    image: String!
    price: Float!
  }

  type Nutrition {
    id: ID
    product_id: Int
    calories: Int
    fat: Int
    cholesterol: Int
    protein: Int
    caffeine: Int
  }

  type Mutation {
    addUser(username: String, password: String): User
    login(username: String, password: String): User
  }

  type User {
    id: ID
    username: String
    password: String
    orders: [Order]
    token: String
  }

  type Order {
    id: ID!
    order_info: String!
    customer_id: ID!
    total: Float!
    date: String!
  }
`;

module.exports = { typeDefs };
