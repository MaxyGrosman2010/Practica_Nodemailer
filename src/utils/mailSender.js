const nodemailer = require('nodemailer');

const sendEmailPractice = async() =>{
    const config = {host: 'smtp.ethereal.email', port: '587', 
    auth: {user: 'hollis26@ethereal.email', pass: 'BvpWEKqT9r2dFmuwKF'}};
    const message = {from: 'maxblast201093@gmail.com', to: 'maxygrosman@gmail.com', 
    subject: 'Practica de NodeMailer', text: 'Esto es una practica'}

    const transporter = nodemailer.createTransport(config);

    const info = await transporter.sendMail(message);
    
    console.log(info);
    return info;
};

module.exports = sendEmailPractice;