import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SpectaclesModule } from './spectacles/spectacles.module';
import { ReservationsModule } from './reservations/reservations.module';
import { StatsModule } from './stats/stats.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FileAttenteModule } from './file-attente/file-attente.module';
import { DbCoreModule } from './database/db_core/db_core.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbCoreModule, 
    AuthModule,
    UsersModule, 
    SpectaclesModule,
    ReservationsModule,
    StatsModule,
    NotificationsModule,
    FileAttenteModule,
  ],
})
export class AppModule {}
