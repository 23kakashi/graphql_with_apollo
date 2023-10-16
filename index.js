const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');

const typeDefs = gql`
  type Query {
    sessions: [Session]
  }

  type Session {
    id: ID!
    title: String!
    description: String
    startAt: String
    endAt: String
    room: String
    date: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions do not fit into a single track, we will be migrating to a tag based system in the future"
      )
    level: String
  }
`;

const resolvers = {
  Query: {
    sessions: () => {
      return sessions;
    },
  },
};

const dataSources = () => {
  sessionAPI: new SessionAPI();
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.port || 4000 }).then(({ url }) => {
  console.log(`graphql running at ${url}`);
});
