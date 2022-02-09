import { registerEnumType } from '@nestjs/graphql';

export enum UserLocale {
  EN = 'EN',
  FR = 'FR',
}
registerEnumType(UserLocale, { name: 'UserLocale' });
