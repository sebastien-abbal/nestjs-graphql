import { databaseProviders } from '@features/database/database.providers';
import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class DatabaseService {
  clearConnections = async () => {
    for (const provider of databaseProviders) {
      await getConnection(provider.name).close();
    }
  };
}
