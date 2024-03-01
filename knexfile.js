
// knexfile.js

module.exports = {
  client: 'pg', 
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'senha',
    database: 'knowledge_init',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};
