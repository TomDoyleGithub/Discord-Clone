"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type User {\n        _id: ID!\n        email: String!\n        username: String!\n        birthday: String!\n        propic: String\n        status: String\n    }\n\n    type Auth {\n        token: ID!\n        user: User\n      }\n\n    type Query {\n        allUsers: [User]\n        me: User\n    }\n\n    type Mutation {\n        register(email: String!, username: String!, password: String!, birthday: String!): Auth\n        login(email: String!, password: String!): Auth\n        sendPassword(email: String!): User\n        changePassword(id: String!, token: String!, password: String!): User\n        updateStatus(status: String!): User\n    }\n"], ["\n    type User {\n        _id: ID!\n        email: String!\n        username: String!\n        birthday: String!\n        propic: String\n        status: String\n    }\n\n    type Auth {\n        token: ID!\n        user: User\n      }\n\n    type Query {\n        allUsers: [User]\n        me: User\n    }\n\n    type Mutation {\n        register(email: String!, username: String!, password: String!, birthday: String!): Auth\n        login(email: String!, password: String!): Auth\n        sendPassword(email: String!): User\n        changePassword(id: String!, token: String!, password: String!): User\n        updateStatus(status: String!): User\n    }\n"])));
exports.default = typeDefs;
var templateObject_1;
