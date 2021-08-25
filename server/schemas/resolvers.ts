import { User } from '../models';

const resolvers = {
    Query : {
        allUsers: async () => {
            return User.find();
          },
    },
};

export default resolvers