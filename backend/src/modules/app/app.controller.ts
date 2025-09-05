import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApi(): object {
    return {
      path: '/api',
      relations: {
        users: '/api/users',
        nodes: '/api/nodes',
      },
    };
  }

  @Get('/users')
  getUsers(): object {
    return this.appService.getUsers();
  }

  @Get('/nodes')
  getNodes(): object {
    return this.appService.getNodes();
  }
}
