import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        _id: ID!
    }

    type Query {
        me: User  
    }
`;

export default typeDefs;