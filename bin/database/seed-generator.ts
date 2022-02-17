import { prisma } from '@features/database/services/prisma.service';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const seedGenerator = async () => {
  await prisma.seedGenerator();
  console.info('Seed done succesfully');
};
seedGenerator();
