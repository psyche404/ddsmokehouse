import { sendContactForm } from '../../lib/api';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      await sendContactForm(data);
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting the form' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
