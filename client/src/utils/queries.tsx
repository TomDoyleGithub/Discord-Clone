import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
        _id
        username
        propic
        status
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