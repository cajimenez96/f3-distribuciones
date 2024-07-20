// models/Contact.ts

import mongoose, { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
});

const Contact = models.Contact || model('Contact', ContactSchema);

export default Contact;
