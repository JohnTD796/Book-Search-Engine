import { gql } from '@apollo/client';

export const ME = gql `query Me {
  me {
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
}
`;