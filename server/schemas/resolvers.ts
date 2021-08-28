import { AuthenticationError } from 'apollo-server-express';
import { User } from '../models';
import jwt from 'jsonwebtoken';
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
        },
        sendPassword: async (_:any, { email }:any) => {
            const user = await User.findOne({ email });
            if(!user) {
                throw new AuthenticationError('No user found with this email address');
            };

            const secret = 'mysecret' + user.password;
            const payload = {
                email: user.email,
                id: user._id
            };
            const token = jwt.sign(payload, secret, {expiresIn: '15m'})
            const link = `https://localhost:3001/reset-password/${user._id}/${token}` || `${process.env.ADDRESS}/reset-password/${user._id}/${token}`;
            console.log(link);
            return user;
        }
    },
};

export default resolvers