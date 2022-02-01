import { databaseProviders } from '@features/_database/database.providers';
import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class DatabaseService {
  async clearConnections() {
    for (const provider of databaseProviders) {
      await getConnection(provider.name).close();
    }
  }
}
