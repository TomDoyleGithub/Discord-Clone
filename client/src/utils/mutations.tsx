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

export const SEND_PASSWORD = gql `
mutation sendPassword ($email: String!) {
  sendPassword(email: $email) {
    _id
    email
    username
    birthday
  }
}
`;

export const CHANGE_PASSWORD = gql `
mutation changePassword ($id: String!, $token: String!, $password: String!) {
  changePassword(id: $id, token: $token, password: $password) {
    _id
    email
    username
    birthday
  }
}
`;

export const STATUS_UPDATE = gql `
mutation updateStatus ($status: String!) {
  updateStatus(status: $status) {
    _id
    status
  }
}
`;

export const SEND_FRIEND = gql `
mutation sendFriend ($username: String!) {
  sendFriend(username: $username) {
    _id
    username
    friends {
      _id
			user {
        _id
        username
        propic
        status
      }
      status
    }
    }
  }
`;