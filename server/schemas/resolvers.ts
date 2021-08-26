import { AuthenticationError } from 'apollo-server-express';
import { User } from '../models';
import authMiddleware from '../utils/auth';

const resolvers = {
    Query : {
        allUsers: async () => {
            return User.find();
          },
    },
    Mutation: {
        register: async (_:any, { email, username, password, birthday }:any) => {
            const user = await User.create({  email, username, password, birthday });
            const token = authMiddleware.signToken(user);
            return { token, user };
        },
        login: async (_:any, { email, password }:any) => {
            const user = await User.findOne({ email });
            if(!user) {
                throw new AuthenticationError('No user found with this email address');
            };
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
            const token = authMiddleware.signToken(user);
            return { token, user };
        }
    },
};

export default resolvers