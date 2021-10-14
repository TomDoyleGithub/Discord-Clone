import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
        _id
        username
        propic
        status
        customStatus
        friendNotifactions
        expireDate
        friends {
            user {
              _id
              username
              propic
              status
              customStatus
              expireDate
            }
            status
          }
        }
    }
`;

export const GET_FRIENDS = gql `
    query getFriends {
      getFriends {
        _id
        friends {
          user {
            _id
            username
            propic
            status
            customStatus
            expireDate
          }
          status
        }
      }
    }
`;

export const ONE_USER = gql `
query oneUser ($username: String!) {
  oneUser (username: $username) {
    _id
  }
}
`;