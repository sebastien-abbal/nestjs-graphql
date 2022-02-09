import { MediaProvider, MediaStatus } from '@features/database/types';
import { UserAvatar } from '../entities';
import { MOCKED_USER } from './user.service.mock';

export const MOCKED_USER_AVATARS: UserAvatar[] = [
  {
    id: '2a279a5a-fcd7-4c60-a0cc-9af503a3d82f',
    source: MediaProvider.AWS,
    status: MediaStatus.ONLINE,
    user: MOCKED_USER,
    size: 1759350,
    width: 500,
    height: 500,
    createdAt: new Date(),
  },
  {
    id: '151eba6b-0671-4b55-9b36-542b5dbc3678',
    source: MediaProvider.AWS,
    status: MediaStatus.OFFLINE,
    user: MOCKED_USER,
    size: 1569396,
    width: 500,
    height: 500,
    createdAt: new Date('01-01-2022'),
    deletedAt: new Date('01-01-2022'),
    fileToDeleteAt: new Date('01-01-2022'),
  },
];

export const mockedUserAvatarService = {
  getUserAvatar: jest.fn().mockResolvedValue(MOCKED_USER_AVATARS[0]),
};
