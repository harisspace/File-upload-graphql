import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({ typeDefs, resolvers, uploads: false });

server.listen().then(({ url }) => {
  console.log(`server running at ${url}`);
});
