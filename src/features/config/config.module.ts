import { config } from '@config';
import { ConfigModule as NestJSConfigModule } from '@nestjs/config';

export const ConfigModule = NestJSConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  load: [() => config.getConfig()],
});
