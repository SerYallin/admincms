import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '@backend/modules/app/app.controller';
import { AppService } from '@backend/modules/app/app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: Partial<Pick<AppService, 'getUsers' | 'getNodes'>>;

  beforeEach(async () => {
    // Создаем мок для AppService
    appService = {
      getUsers: jest.fn().mockReturnValue({ users: ['user1', 'user2'] }),
      getNodes: jest.fn().mockReturnValue({ nodes: ['node1', 'node2'] }),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: appService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getApi', () => {
    it('should return API info', () => {
      expect(appController.getApi()).toEqual({
        path: '/api',
        relations: {
          users: '/api/users',
          nodes: '/api/nodes',
        },
      });
    });
  });

  describe('getUsers', () => {
    it('should return list of users', () => {
      expect(appController.getUsers()).toEqual({ users: ['user1', 'user2'] });
      expect(appService.getUsers).toHaveBeenCalled();
    });
  });

  describe('getNodes', () => {
    it('should return list of nodes', () => {
      expect(appController.getNodes()).toEqual({ nodes: ['node1', 'node2'] });
      expect(appService.getNodes).toHaveBeenCalled();
    });
  });
});
