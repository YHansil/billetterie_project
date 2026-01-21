import { Test, TestingModule } from '@nestjs/testing';
import { FileAttenteController } from './file-attente.controller';

describe('FileAttenteController', () => {
  let controller: FileAttenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileAttenteController],
    }).compile();

    controller = module.get<FileAttenteController>(FileAttenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
