// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/mongodb';
import Contact from '../../models/Contact';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Guardar los datos en la base de datos
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Enviar correo electrónico
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes usar cualquier otro servicio de email
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: 'Error sending email' });
      }
      res.status(200).json({ message: 'Contact form submitted successfully' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
