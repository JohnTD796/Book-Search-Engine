const typeDefs = `
  type Book {
    _id: ID
    authors : [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book] 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(bookData: BookInput!): User
    removeBook(userId: ID!, bookId: String!): User
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }
`;

module.exports = typeDefs;