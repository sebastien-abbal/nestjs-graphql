import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { config } from '../../../config';
import { USERS, USER_AVATARS } from '../../../features/database/data/seed';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private static instance: PrismaService;

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async seedGenerator() {
    if (config.env === 'prod' || config.env === 'preprod')
      throw new Error(`Seed can't be set to the env mode [${config.env}].`);

    await this.user.createMany({ data: USERS });
    await this.userAvatarPicture.createMany({ data: USER_AVATARS });
  }

  static getInstance(): PrismaService {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaService();
    }

    return PrismaService.instance;
  }
}

export const prisma = PrismaService.getInstance();
