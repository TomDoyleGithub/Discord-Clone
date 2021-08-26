import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        username: String!
        birthday: String!
    }

    type Query {
        allUsers: [User]
    }
`;

export default typeDefs;