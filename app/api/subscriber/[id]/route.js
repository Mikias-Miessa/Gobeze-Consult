import dbConnect from '@/utils/db';
import Email from '/models/Email';

export async function getEmails(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      // Fetch all emails from MongoDB
      const {emails} = await Email.find({});
      res.status(200).json(emails);
    } catch (error) {
      console.error('Error fetching emails:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Email.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Email deleted' }, { status: 200 });
}
