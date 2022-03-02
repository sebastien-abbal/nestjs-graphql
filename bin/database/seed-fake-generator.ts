import { config as dotEnvConfig } from 'dotenv';
import { seedFakeGenerator } from './services';

dotEnvConfig();

seedFakeGenerator();

console.info('Seed fake data check done succesfully');
