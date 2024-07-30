const  User  = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return User.findOne({ _id: context.user._id });
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

    addBook: async (parent, { bookData }, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: bookData }},
        { new: true, }
      );
    },

    removeBook: async (parent, { bookId }, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: bookId }},
        { new: true }
      )
    }

  }
}

module.exports = resolvers;