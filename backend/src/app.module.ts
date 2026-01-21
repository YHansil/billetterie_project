import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SpectaclesModule } from './spectacles/spectacles.module';
import { ReservationsModule } from './reservations/reservations.module';
import { StatsModule } from './stats/stats.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FileAttenteModule } from './file-attente/file-attente.module';

@Module({
  imports: [AuthModule, UsersModule, SpectaclesModule, ReservationsModule, StatsModule, NotificationsModule, FileAttenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
