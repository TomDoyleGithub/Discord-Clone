import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';

import { schemaExport } from './schemas';

import { db } from './config/connection';
const { typeDefs, resolvers } = schemaExport;

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Add Production Code

app.get('*', (req:any, res:any) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
})