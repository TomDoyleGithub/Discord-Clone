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

export const REGISTER = gql `
mutation register($email: String!, $username: String!, $password: String!, $birthday: String!) {
    register(email: $email, username: $username, password: $password, birthday: $birthday) {
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