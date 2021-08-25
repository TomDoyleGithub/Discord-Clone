import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
    }

    type Query {
        allUsers: [User]
    }
`;

export default typeDefs;