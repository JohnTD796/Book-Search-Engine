const typeDefs = `
  type Book {
    authors : [String]
    description: String!
    bookId: String!
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
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBook(authors: [String]!, description: String!, bookId: String!, image: String, link: String, title: String!): User
    removeBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;