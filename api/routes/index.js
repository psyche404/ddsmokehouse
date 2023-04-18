module.exports = [
    {
      method: 'GET',
      path: '/menu-items',
      handler: 'menu.find',
    },
    {
      method: 'GET',
      path: '/events',
      handler: 'events.find',
    },
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.create',
    },
  ];
  