import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';

import { typeDefs, resolvers} from './schemas';
import authMiddleware from './utils/auth';

import db from './config/connection';

const isProd = process.env.NODE_ENV === 'production';
let basePath = '../';

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware.authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (isProd) {
    basePath = '../../'
    app.use(express.static(path.join(__dirname, basePath + 'client/build')));
};


app.get('*', (req:any,res:any) => {
    console.log(req.query)
   return res.sendFile(path.join(__dirname, basePath + 'client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
});