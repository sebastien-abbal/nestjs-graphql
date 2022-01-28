import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { databaseProviders } from './database.providers';

@Injectable()
export class DatabaseService {
  clearConnections = async () => {
    for (const provider of databaseProviders) {
      await getConnection(provider.name).close();
    }
  };
}
