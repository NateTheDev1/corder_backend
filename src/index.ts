export {};

// ENVIRONMENT
require("dotenv").config();
const ENV: String = process.env.NODE_ENV!;
const PORT: String = process.env.PORT!;

const cors = require("cors");

const express = require("express");
const server = express();

server.use(cors());

//APOLLO
const { typeDefs } = require("./gql/typeDefs");
const { resolvers } = require("./gql/resolvers");
const { ApolloServer } = require("apollo-server-express");

const gqlServer = new ApolloServer({ typeDefs, resolvers });
gqlServer.applyMiddleware({ app: server });

server.get("/", (req: any, res: any) => {
  res.status(200).json({ message: "Welcome to the corder API" });
});

server.listen(PORT, () => {
  console.info(`🚀 Server is running in ${ENV} on port ${PORT}`);
});
