const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

import toExport from './schemas';
const { typeDefs, resolvers } = toExport;

const db = require('./config/connection');

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