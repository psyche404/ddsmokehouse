const { parse } = require('pg-connection-string');
const config = require('./.env.config');

module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    const { host, port, database, user, password } = parse(env('DATABASE_URL'));
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host,
            port,
            database,
            username: user,
            password,
            ssl: { rejectUnauthorized: false },
          },
          options: {},
        },
      },
    };
  }

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'sqlite',
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
