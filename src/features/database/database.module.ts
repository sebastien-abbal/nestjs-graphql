import { databaseProviders } from '@features/database/database.providers';
import { DatabaseService } from '@features/database/services';
import { Module } from '@nestjs/common';

@Module({
  providers: [DatabaseService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
