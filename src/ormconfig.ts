import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'boardsadmin',
  password: 'qwerty',
  database: 'boards',
};

export default config;
