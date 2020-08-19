const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    products: [Product]
  }

  type Product {
    id: ID!
  }
`;

module.exports = { typeDefs };
