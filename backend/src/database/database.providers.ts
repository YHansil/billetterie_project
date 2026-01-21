import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseProviders = [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'theatre_core_db',
    autoLoadEntities: true,
    synchronize: false,
  }),
];
