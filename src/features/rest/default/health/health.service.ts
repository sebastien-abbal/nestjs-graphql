import { config, DEV_ENV } from '@config';
import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class HealthService {
  getTypeOrmConnectionStatus = async (): Promise<string> => {
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
