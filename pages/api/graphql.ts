import type { NextApiRequest, NextApiResponse } from "next";

import { ApolloServer } from "@apollo/server";

import { startServerWithHandler } from "../../components/utils";

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
};
const server = new ApolloServer({ typeDefs: typeDef, resolvers: resolvers });

export default startServerWithHandler(server);
