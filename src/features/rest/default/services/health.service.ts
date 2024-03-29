import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '.prisma/client';

@Injectable()
export class HealthService {
  getDatabaseConnectionStatus = async (): Promise<string> => {
    const prismaClient = new PrismaClient();
    await prismaClient.$queryRaw(
      Prisma.sql`SELECT * FROM PUBLIC."User" LIMIT 1`,
    );
    return 'ok';
  };
}
