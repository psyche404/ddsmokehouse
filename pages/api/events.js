import { getEvents } from '../../lib/api';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const events = await getEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching events' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
