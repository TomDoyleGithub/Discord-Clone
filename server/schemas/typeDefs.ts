import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        username: String!
        birthday: String!
        propic: String
        status: String
        friends: [friend]
    }

    type friend {
        _id: ID!
        user: User
        status: Int
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        allUsers: [User]
        me: User
        getFriends: User
    }

    type Mutation {
        register(email: String!, username: String!, password: String!, birthday: String!): Auth
        login(email: String!, password: String!): Auth
        sendPassword(email: String!): User
        changePassword(id: String!, token: String!, password: String!): User
        updateStatus(status: String!): User
        sendFriend(username: String!): [User]
    }
`;

export default typeDefs;