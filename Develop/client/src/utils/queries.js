import { gql } from '@apollo/client';

export const ME = gql `query Me($userId: ID!) {
  me(userId: $userId) {
    _id
    username
    savedBooks {
      _id
      authors
      description
      image
      link
      title
    }
  }
}`;