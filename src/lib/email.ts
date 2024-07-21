import { EMAIL_HOST, EMAIL_PASS, EMAIL_USER } from '@/utils/contants';
import nodemailer from 'nodemailer';

    // Enviar correo electrónico
export const transporter = nodemailer.createTransport({
  service: EMAIL_HOST, // Puedes usar cualquier otro servicio de email
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

transporter.verify().then(() => {
  console.log('Ready to send emails');
}).catch(err => {
  console.error('Error with email configuration:', err);
});
