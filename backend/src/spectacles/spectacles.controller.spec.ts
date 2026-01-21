import { Test, TestingModule } from '@nestjs/testing';
import { SpectaclesController } from './spectacles.controller';

describe('SpectaclesController', () => {
  let controller: SpectaclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpectaclesController],
    }).compile();

    controller = module.get<SpectaclesController>(SpectaclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
