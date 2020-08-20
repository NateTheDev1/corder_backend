"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ENVIRONMENT
require("dotenv").config();
var ENV = process.env.NODE_ENV;
var PORT = process.env.PORT;
var cors = require("cors");
var express = require("express");
var server = express();
server.use(cors());
//APOLLO
var typeDefs = require("./gql/typeDefs").typeDefs;
var resolvers = require("./gql/resolvers").resolvers;
var ApolloServer = require("apollo-server-express").ApolloServer;
var gqlServer = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
gqlServer.applyMiddleware({ app: server });
server.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to the corder API" });
});
server.listen(PORT, function () {
    console.info("\uD83D\uDE80 Server is running in " + ENV + " on port " + PORT);
});
