import { config as dotEnvConfig } from 'dotenv';
import { isAlreadyReqSeeded } from './services';

dotEnvConfig();

isAlreadyReqSeeded();
