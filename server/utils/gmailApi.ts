const nodemailer = require('nodemailer');
require('dotenv').config();
import { google } from 'googleapis';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const sendMail = async (link:any, username:any, email:any) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth',
                user: 'heypunkinut@gmail.com',
                pass: process.env.PASSWORD,
                clientId : CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: 'Discord <heypunkinut@gmail.com>',
            to: email,
            subject: 'Password Reset Request for Discord',
            text: `Hey ${username}, Your Discord password can be reset by clicking the button below. If you did not request a new password, please ignore this email. ${link}`
        };

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (err) {
        return(err)
    }
};

export default sendMail;
