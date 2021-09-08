"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var path_1 = __importDefault(require("path"));
var schemas_1 = require("./schemas");
var auth_1 = __importDefault(require("./utils/auth"));
var connection_1 = __importDefault(require("./config/connection"));
var app = express_1.default();
var PORT = process.env.PORT || 3001;
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: schemas_1.resolvers,
    context: auth_1.default.authMiddleware,
});
server.applyMiddleware({ app: app });
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));
}
;
app.get('*', function (res) {
    res.sendFile(path_1.default.join(__dirname, '../client/build/index.html'));
});
connection_1.default.once('open', function () {
    app.listen(PORT, function () {
        console.log("\uD83C\uDF0D Now listening on localhost:" + PORT);
        console.log("Use GraphQL at http://localhost:" + PORT + server.graphqlPath);
    });
});
