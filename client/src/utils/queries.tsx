import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
        _id
        username
        propic
        status
        friends {
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
          }
          status
        }
      }
    }
`;