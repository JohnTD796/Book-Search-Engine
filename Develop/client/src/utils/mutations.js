import { gql } from '@apollo/client';

export const LOGIN_USER = gql`mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}`;

export const ADD_USER = gql`mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}`;

export const ADD_BOOK = gql`mutation AddBook($bookData: BookInput!) {
  addBook(bookData: $bookData) {
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

export const REMOVE_BOOK = gql`mutation RemoveBook($userId: ID!, $bookId: String!) {
  removeBook(userId: $userId, bookId: $bookId) {
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