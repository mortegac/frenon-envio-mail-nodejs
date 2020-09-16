
const nodemailer = require('@nodemailer/pro');
const template = require('./templates/confirmacion')
let obj = {
    nombre: process.argv[2],
    email: process.argv[3],
    hash: '5887d4fc097486a5e9e3e23a',
};

console.log(obj);

// Email transaccional
// Email masivos

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fullstacksodimac@gmail.com',
        pass: 'sodimac.,123'
    }
});

// Verificar conexion de email
transporter.verify( function(error, sucess){
    if(error){
        console.log(error);
    }else{
        console.log('EL server de email se encuentra conectado');
    }
});

let mailOptions = {
    from: `${obj.nombre}<${obj.email}>`,
    to: obj.email,
    subject: 'Email testing',
    text: 'EMAIL DE PRUEBA',
    html: template.emailConfirmacion(obj)
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }else{
        console.log('Message %s sent: %s', info.messageId, info.response);
    }
});

