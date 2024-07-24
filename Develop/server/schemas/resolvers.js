const  User  = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({ username, email, password});
      const token = signToken(user)
      
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

console.log(user)

      if (!user) {
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);

      console.log(correctPassword)
      if(!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      console.log(token)
      return {token, user};
    },

    addBook: async (parent, { bookData }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { savedBooks: bookData }},
        { new: true, }
      );
    },

    removeBook: async (parent, { userId, bookId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: bookData }},
        { new: true }
      )
    }

  }
}

module.exports = resolvers;