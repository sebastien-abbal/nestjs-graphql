import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const ENV_REQUIRED_ARRAY = [
  'NODE_ENV',
  'APP_PORT',
  'APP_HOST',
  'AWS_REGION',
  'PG_HOST',
  'PG_PORT',
  'PG_DATABASE',
  'PG_USER',
  'PG_PASSWORD',
  'JWT_SECRET',
  'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
  'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
  'ENCRYPTION_KEY',
];

const checkEnv = () => {
  const missingEnvKeys = [];
  for (const envKey of ENV_REQUIRED_ARRAY) {
    if (!process.env[envKey]) missingEnvKeys.push(envKey);
  }

  if (missingEnvKeys.length > 0) {
    console.error(
      `❌ Missing required env key${
        missingEnvKeys.length > 1 ? 's' : ''
      } in your .env : [${missingEnvKeys.join(', ')}]`,
    );
    process.exit(1);
  }
};
checkEnv();