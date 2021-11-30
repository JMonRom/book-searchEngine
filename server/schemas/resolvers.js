const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
      }
      throw new AuthenticationError('Log in first !');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('User not found');
      }

      const correctPW = await user.isCorrectPassword(password);

      if(!correctPW) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, {newBook}, context) => {
      if(context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {savedBooks: newBook }},
          {new: true}
        );
        return updatedUser;
      }
      throw new AuthenticationError('Log in first !')
    },
    removeBook: async (parent, {bookId}, context) => {
      if(context.user) {
        const updatedUser = await User.findbyIdandUpdate(
          {_id: context.user._id},
          {$push: {savedBooks: bookId }},
          {new: true}
        );
        return updatedUser;
      }
      throw new AuthenticationError('Log in first !');
    },
  },
};

module.exports = resolvers;