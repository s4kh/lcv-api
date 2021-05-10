import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'appuser',
  password: 'apppass',
  database: 'app',
  entities: [join(__dirname, '**/*.entity{ .ts,.js}')],
  migrations: [join(__dirname, 'src/migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
  autoLoadEntities: true,
  synchronize: false,
};

export default config;
