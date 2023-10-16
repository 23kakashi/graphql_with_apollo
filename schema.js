const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startAt: String
      endAt: String
      room: String
      date: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionsById(id: ID): Session
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

module.exports = typeDefs;
