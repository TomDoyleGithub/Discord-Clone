import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
        username
        birthday
      }
      token
    }
  }
`;