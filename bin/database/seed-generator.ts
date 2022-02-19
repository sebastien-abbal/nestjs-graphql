import { config as dotEnvConfig } from 'dotenv';
import { prisma } from '../../src/features/database/services/prisma.service';

dotEnvConfig();

const seedGenerator = async () => {
  await prisma.seedGenerator();
  console.info('Seed done succesfully');
};
seedGenerator();
