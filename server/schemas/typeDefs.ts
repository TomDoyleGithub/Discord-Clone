const { gql } = require('apollo-server-express');

export const typeDefs = gql`
    type User {
        _id: ID!
    }

    type Query {
        me: User  
    }
`;