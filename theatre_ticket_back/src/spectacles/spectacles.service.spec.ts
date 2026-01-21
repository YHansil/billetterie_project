import { Test, TestingModule } from '@nestjs/testing';
import { SpectaclesService } from './spectacles.service';

describe('SpectaclesService', () => {
  let service: SpectaclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectaclesService],
    }).compile();

    service = module.get<SpectaclesService>(SpectaclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
