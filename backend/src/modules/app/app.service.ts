import { Injectable } from '@nestjs/common';
import { DbService } from '@backend/modules/app/db.service';

@Injectable()
export class AppService {
  constructor(private db: DbService) {}

  getUsers(): object {
    return this.db.user.findMany();
  }

  getNodes(): object {
    return this.db.node.findMany();
  }
}
