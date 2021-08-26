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
        }
    },
};

export default resolvers