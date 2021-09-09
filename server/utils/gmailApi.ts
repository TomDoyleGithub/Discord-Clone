const nodemailer = require('nodemailer'),
sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();

const mailTransporter = nodemailer.createTransport(sgTransport({
    auth: {
        api_key: process.env.ADMIN_EMAIL_API_KEY
    }
}));

const sendMail = async (link:any, username:any, email:any) => {
    try {
        const result = await mailTransporter.sendMail({
            from: `"Discord" <heypunkinut@gmail.com>`,
            to: email,
            replyTo: 'heypunkinut@gmail.com',
            subject: 'Password Reset Request for Discord',
            html: `
            <h2 style="color:black; opacity: 0.7;">Hey ${username},</h2>
            <p style="font-size: 14px; opacity: 0.7;">Your Discord password can be reset by clicking the button below. If you did not request a new password, please ignore this email.</p>
            <a href='${link}'><button style="border: none; padding: 14px; border-radius: 5px; font-size: 14px; color: white; background-color: #5865F2;">Reset Password</button></a>
            `
        });
        return result;
    } catch (err) {
        console.log(err);
    }
};

export default sendMail;
