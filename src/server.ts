import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import express from "express";

const port = 4000;
const server = new ApolloServer({ typeDefs, resolvers, uploads: false });
const app = express();

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
