import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { config, DEV_ENV } from '../../../../config';

@Injectable()
export class HealthService {
  getDatabaseConnectionStatus = async (): Promise<string> => {
    try {
      const prismaClient = new PrismaClient();
      await prismaClient.$queryRaw(
        Prisma.sql`SELECT * FROM PUBLIC."User" LIMIT 1`,
      );
      return 'ok';
    } catch (err) {
      return config.env === DEV_ENV ? err.message : 'error';
    }
  };
}
