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
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require('nodemailer');
require('dotenv').config();
var googleapis_1 = require("googleapis");
var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var REDIRECT_URI = process.env.REDIRECT_URI;
var REFRESH_TOKEN = process.env.REFRESH_TOKEN;
var oAuth2Client = new googleapis_1.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
var sendMail = function (link, username, email) { return __awaiter(void 0, void 0, void 0, function () {
    var accessToken, transport, mailOptions, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, oAuth2Client.getAccessToken()];
            case 1:
                accessToken = _a.sent();
                transport = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth',
                        user: 'heypunkinut@gmail.com',
                        pass: process.env.PASSWORD,
                        clientId: CLIENT_ID,
                        clientSecret: CLIENT_SECRET,
                        refreshToken: REFRESH_TOKEN,
                        accessToken: accessToken
                    }
                });
                mailOptions = {
                    from: 'Discord <heypunkinut@gmail.com>',
                    to: email,
                    subject: 'Password Reset Request for Discord',
                    text: "Hey " + username + ", Your Discord password can be reset by clicking the button below. If you did not request a new password, please ignore this email. " + link,
                    html: "\n            <h2 style=\"color:black; opacity: 0.7;\">Hey " + username + ",</h2>\n            <p style=\"font-size: 14px; opacity: 0.7;\">Your Discord password can be reset by clicking the button below. If you did not request a new password, please ignore this email.</p>\n            <a href='" + link + "'><button style=\"border: none; padding: 14px; border-radius: 5px; font-size: 14px; color: white; background-color: #5865F2;\">Reset Password</button></a>\n            "
                };
                return [4 /*yield*/, transport.sendMail(mailOptions)];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
            case 3:
                err_1 = _a.sent();
                return [2 /*return*/, (err_1)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = sendMail;
