import { ConfigModule as NestJSConfigModule } from '@nestjs/config';
import { defaultConfig } from './default.config';
import { graphqlConfig } from './graphql.config';
import { jwtConfig } from './jwt.config';

export * from './default.config';
export * from './graphql.config';
export * from './jwt.config';
export * from './_constants';

export const ConfigModule = NestJSConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  load: [defaultConfig, graphqlConfig, jwtConfig],
});
