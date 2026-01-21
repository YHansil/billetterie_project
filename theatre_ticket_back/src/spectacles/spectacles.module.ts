import { Module } from '@nestjs/common';
import { SpectaclesController } from './spectacles.controller';
import { SpectaclesService } from './spectacles.service';

@Module({
  controllers: [SpectaclesController],
  providers: [SpectaclesService]
})
export class SpectaclesModule {}
