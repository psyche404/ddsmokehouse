import { getMenuItems } from '../../lib/api';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const menuItems = await getMenuItems();
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching menu items' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
