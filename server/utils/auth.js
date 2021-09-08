"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = 'mysecret';
var expiration = '2h';
var authMiddleware = {
    authMiddleware: function (_a) {
        var req = _a.req;
        var token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        try {
            var data = jsonwebtoken_1.default.verify(token, secret, { maxAge: expiration }).data;
            req.user = data;
        }
        catch (_b) {
            console.log('Invalid token');
        }
        return req;
    },
    signToken: function (_a) {
        var _id = _a._id, email = _a.email, username = _a.username;
        var payload = { _id: _id, email: email, username: username };
        return jsonwebtoken_1.default.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
exports.default = authMiddleware;
