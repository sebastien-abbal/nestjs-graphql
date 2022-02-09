import { registerEnumType } from '@nestjs/graphql';

export enum MediaProvider {
  AWS = 'AWS',
}
registerEnumType(MediaProvider, { name: 'MediaProvider' });
