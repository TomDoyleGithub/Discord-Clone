import { AuthenticationError } from 'apollo-server-express';
import { User } from '../models';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import authMiddleware from '../utils/auth';
import sendMail from '../utils/gmailApi';

const resolvers = {
    Query : {
        allUsers: async () => {
            return User.find().populate({
                path: 'friends',
                populate: {
                    path: 'user',
                    model: 'User'
                  } 
            });
          },
        me: async (parent:any, args:any, context:any) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate({
                    path: 'friends',
                    populate: {
                        path: 'user',
                        model: 'User'
                      } 
                });
              }
              throw new AuthenticationError('Cannot find a user with this id!');
            }
    },
    Mutation: {
        register: async (_:any, { email, username, password, birthday, propic, status }:any) => {
            const user = await User.create({  email, username, password, birthday, propic, status });
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
            const token = jwt.sign(payload, secret, {expiresIn: '15h'})
            const link = `https://discord-punkinut.herokuapp.com/reset-password/${user._id}/${token}`;
            sendMail(link, user.username, email);
            return user;
        },
        changePassword: async (_:any, { id, token, password }:any) => {
            const user = await User.findOne({ _id: id });
            if(!user) {
                throw new AuthenticationError('No user found...');
            };
            const secret = 'mysecret' + user.password;
            try {
                const payload = jwt.verify(token, secret);
                password = await bcrypt.hash(password, 10);
                await User.updateOne({ _id: id }, { password }, {new: true});
                return user;
            } catch (err) {
                console.log('Invalid token');
                return user;
            }
        },
        updateStatus: async (parent:any, { status }:any, context:any) => {
            return User.findOneAndUpdate({ _id: context.user._id}, { status }, {new: true});
        },
        sendFriend: async (_:any, { id }:any, context:any) => {
            const user1 = await User.findOneAndUpdate({ _id: context.user._id }, { $push: {friends: { user: id, status: 1 }} }, {new: true}).populate({
                path: 'friends',
                populate: {
                    path: 'user',
                    model: 'User'
                  } 
            });
            const user2 = await User.findOneAndUpdate({ _id: id }, { $push: {friends: { user: context.user_id, status: 2 }} }, {new: true}).populate({
                path: 'friends',
                populate: {
                    path: 'user',
                    model: 'User'
                  } 
            });
            return [user1, user2];
        }
    },
};

export default resolvers