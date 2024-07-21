import { transporter } from '@/lib/email';
import Contact from '@/models/Contact';
import { EMAIL_USER } from '@/utils/contants';
import { generateTemplate } from '@/utils/helper';
import type { NextApiRequest, NextApiResponse } from 'next';
  
type ResponseData = {
  message: string
}

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === 'POST') {

    const { subject } = req.body;

    // // Guardar los datos en la base de datos
    const newContact = new Contact({ fullName, phone, address, email });
    // await newContact.save();


    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject,
      text: generateTemplate(req.body),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json(error) ;
      }
      return res.status(200).json({ message: 'Contact form submitted successfully' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`El método ${req.method} no existe`);
  }
}

export default handler