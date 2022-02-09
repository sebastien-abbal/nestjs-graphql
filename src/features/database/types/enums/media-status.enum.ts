import { registerEnumType } from '@nestjs/graphql';

export enum MediaStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  ERROR = 'ERROR',
}
registerEnumType(MediaStatus, { name: 'MediaStatus' });
