import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const ENV_REQUIRED_ARRAY = [
  'NODE_ENV',
  'AWS_KEY_REGION',
  'DATABASE_URL',
  'ASSETS_CDN_URL',
  'DOMAIN_URL',
  'JWT_PUBLIC_KEY',
  'JWT_PRIVATE_KEY',
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
