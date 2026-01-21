import { Test, TestingModule } from '@nestjs/testing';
import { FileAttenteService } from './file-attente.service';

describe('FileAttenteService', () => {
  let service: FileAttenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileAttenteService],
    }).compile();

    service = module.get<FileAttenteService>(FileAttenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
