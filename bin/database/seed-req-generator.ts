import { config as dotEnvConfig } from 'dotenv';
import { seedReqGenerator } from './services';

dotEnvConfig();

seedReqGenerator();

console.info('Seed required data check done succesfully');
