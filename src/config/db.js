const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'todos',
  user: 'postgres',
  password: 'postgres',
});

client.connect();

module.exports = client;
