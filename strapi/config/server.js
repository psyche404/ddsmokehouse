module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('URL', 'https://deft-gnome-afe72b.netlify.app'),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'some_secret_key'),
      },
    },
  });
  
