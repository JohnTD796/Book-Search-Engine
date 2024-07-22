const { User } = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
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

      if (!user) {
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);

      if(!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return {token, user};
    },

    addBook: async (parent, { authors, description, bookId, image, link, title }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: 
            { 
              savedBooks: {
                authors, 
                description, 
                bookId, image, 
                link, 
                title 
              }
            }
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeBook: async (parent, { userId, bookId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { 
          $pull: 
            { 
              savedBooks: {
                authors, 
                description, 
                bookId, 
                image, 
                link, 
                title
              }
            }
        },
        { new: true }
      )
    }

  }
}

module.exports = resolvers;