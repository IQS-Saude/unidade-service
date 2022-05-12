import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFileSync } from 'fs';

export const typeOrmConfiguration = () => {
  let config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    migrations: ['{dist, src}/infrastructure/data/migrations/*.{js, ts}'],
    migrationsRun: true,
    autoLoadEntities: true,
  };

  if (process.env.DB_SSL === 'true') {
    config = {
      ...config,
      ssl: {
        ca: readFileSync(process.env.DB_SSL_CERT_PATH),
      },
    };
  }

  return config;
};
