import { databaseProviders } from '@features/_database/database.providers';
import { DatabaseService } from '@features/_database/database.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [DatabaseService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
