import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './users.controller';
import { ApiService } from './users.service';

describe('AppController', () => {
  let appController: ApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    appController = app.get<ApiController>(ApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World Front-end resources!');
    });
  });
});
