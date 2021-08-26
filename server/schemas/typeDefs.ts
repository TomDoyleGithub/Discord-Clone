import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        username: String!
        birthday: String!
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        allUsers: [User]
    }

    type Mutation {
        register(email: String!, username: String!, password: String!, birthday: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

export default typeDefs;