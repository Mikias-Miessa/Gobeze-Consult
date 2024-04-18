// pages/api/submitEmail.js

import dbConnect from "@/utils/db";
import EmailModel from '@/models/Email';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Create a new email document and save it to MongoDB
      const newEmail = new EmailModel({ email });
      await newEmail.save();

      res.status(200).json({ message: 'Email submitted successfully' });
    } catch (error) {
      console.error('Error submitting email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
