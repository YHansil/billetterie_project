import { Module } from '@nestjs/common';
import { FileAttenteController } from './file-attente/file-attente.controller';
import { FileAttenteService } from './file-attente/file-attente.service';

@Module({
  controllers: [FileAttenteController],
  providers: [FileAttenteService]
})
export class FileAttenteModule {}
