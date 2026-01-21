import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Ajoute ConfigService
import { Utilisateur } from './entities/utilisateur.entity';
import { Role } from './entities/role.entity';
import { Spectacle } from './entities/spectacle.entity';
import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'core',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_CORE_HOST'),
        port: configService.get<number>('DB_CORE_PORT'),
        username: configService.get<string>('DB_CORE_USER'),
        password: configService.get<string>('DB_CORE_PASSWORD'),
        database: configService.get<string>('DB_CORE_NAME'),
        entities: [Utilisateur, Role, Spectacle, Reservation],
        synchronize: false,
      }),
    }),
    TypeOrmModule.forFeature(
      [Utilisateur, Role, Spectacle, Reservation],
      'core',
    ),
  ],
  exports: [TypeOrmModule],
})
export class DbCoreModule {}