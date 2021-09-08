"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var models_1 = require("../models");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var auth_1 = __importDefault(require("../utils/auth"));
var gmailApi_1 = __importDefault(require("../utils/gmailApi"));
var resolvers = {
    Query: {
        allUsers: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, models_1.User.find()];
            });
        }); },
        me: function (parent, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (context.user) {
                    return [2 /*return*/, models_1.User.findOne({ _id: context.user._id })];
                }
                throw new apollo_server_express_1.AuthenticationError('Cannot find a user with this id!');
            });
        }); }
    },
    Mutation: {
        register: function (_, _a) {
            var email = _a.email, username = _a.username, password = _a.password, birthday = _a.birthday, propic = _a.propic, status = _a.status;
            return __awaiter(void 0, void 0, void 0, function () {
                var user, token;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, models_1.User.create({ email: email, username: username, password: password, birthday: birthday, propic: propic, status: status })];
                        case 1:
                            user = _b.sent();
                            token = auth_1.default.signToken(user);
                            return [2 /*return*/, { token: token, user: user }];
                    }
                });
            });
        },
        login: function (_, _a) {
            var email = _a.email, password = _a.password;
            return __awaiter(void 0, void 0, void 0, function () {
                var user, correctPw, token;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, models_1.User.findOne({ email: email })];
                        case 1:
                            user = _b.sent();
                            if (!user) {
                                throw new apollo_server_express_1.AuthenticationError('No user found with this email address');
                            }
                            ;
                            return [4 /*yield*/, user.isCorrectPassword(password)];
                        case 2:
                            correctPw = _b.sent();
                            if (!correctPw) {
                                throw new apollo_server_express_1.AuthenticationError('Incorrect credentials');
                            }
                            token = auth_1.default.signToken(user);
                            return [2 /*return*/, { token: token, user: user }];
                    }
                });
            });
        },
        sendPassword: function (_, _a) {
            var email = _a.email;
            return __awaiter(void 0, void 0, void 0, function () {
                var user, secret, payload, token, link;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, models_1.User.findOne({ email: email })];
                        case 1:
                            user = _b.sent();
                            if (!user) {
                                throw new apollo_server_express_1.AuthenticationError('No user found with this email address');
                            }
                            ;
                            secret = 'mysecret' + user.password;
                            payload = {
                                email: user.email,
                                id: user._id
                            };
                            token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '15h' });
                            link = "http://localhost:3000/reset-password/" + user._id + "/" + token || process.env.ADDRESS + "/reset-password/" + user._id + "/" + token;
                            gmailApi_1.default(link, user.username, email);
                            return [2 /*return*/, user];
                    }
                });
            });
        },
        changePassword: function (_, _a) {
            var id = _a.id, token = _a.token, password = _a.password;
            return __awaiter(void 0, void 0, void 0, function () {
                var user, secret, payload, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, models_1.User.findOne({ _id: id })];
                        case 1:
                            user = _b.sent();
                            if (!user) {
                                throw new apollo_server_express_1.AuthenticationError('No user found...');
                            }
                            ;
                            secret = 'mysecret' + user.password;
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 5, , 6]);
                            payload = jsonwebtoken_1.default.verify(token, secret);
                            return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                        case 3:
                            password = _b.sent();
                            return [4 /*yield*/, models_1.User.updateOne({ _id: id }, { password: password }, { new: true })];
                        case 4:
                            _b.sent();
                            return [2 /*return*/, user];
                        case 5:
                            err_1 = _b.sent();
                            console.log('Invalid token');
                            return [2 /*return*/, user];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
        updateStatus: function (parent, _a, context) {
            var status = _a.status;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, models_1.User.findOneAndUpdate({ _id: context.user._id }, { status: status }, { new: true })];
                });
            });
        },
    },
};
exports.default = resolvers;
