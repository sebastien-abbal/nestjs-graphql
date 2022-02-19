import {
  MediaProvider,
  MediaStatus,
  UserAvatarPicture,
} from '../../../../@graphql/generated';
import { USERS } from './users.data';

export const USER_AVATARS: UserAvatarPicture[] = [
  {
    id: '2a279a5a-fcd7-4c60-a0cc-9af503a3d82f',
    provider: MediaProvider.AWS,
    status: MediaStatus.ONLINE,
    userID: USERS[0].id,
    size: 1759350,
    width: 500,
    height: 500,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
    fileToDeleteAt: null,
  },
  {
    id: '151eba6b-0671-4b55-9b36-542b5dbc3678',
    provider: MediaProvider.AWS,
    status: MediaStatus.OFFLINE,
    userID: USERS[0].id,
    size: 1569396,
    width: 500,
    height: 500,
    createdAt: new Date('01-01-2022'),
    updatedAt: null,
    deletedAt: new Date('01-01-2022'),
    fileToDeleteAt: new Date('01-01-2022'),
  },
];
