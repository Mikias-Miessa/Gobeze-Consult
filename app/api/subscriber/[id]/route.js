import dbConnect from '@/utils/db';
import Email from '/models/Email';

export async function getEmails(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      // Fetch all emails from MongoDB
      const emails = await Email.find({});
      res.status(200).json(emails);
    } catch (error) {
      console.error('Error fetching emails:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// Export the getEmails function as the default export
export default getEmails;
