/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloServer } from "@apollo/server";

import { startServerWithHandler } from "../../components/utils";

// _ codegen to generate from SSOT schema

const user = {
  username: "test",
  email: "hello@email.com",
  secretHash: "secret",
};

const typeDef = `#graphql
  type User {
    username: String!
    email: String!
    secretHash: String!
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, secretHash: String!): User
  }
`;

const resolvers = {
  Query: {
    user: () => user,
  },

  Mutation: {
    createUser: async (root: any, args: any) => {
      console.log("root", root);
      console.log("args", args);
      user.username = args.username;
      user.email = args.email;
      user.secretHash = args.secretHash;

      return user;
    },
  },

  // codegen to generate from SSOT schema _
};
const server = new ApolloServer({ typeDefs: typeDef, resolvers: resolvers });

export default startServerWithHandler(server);
