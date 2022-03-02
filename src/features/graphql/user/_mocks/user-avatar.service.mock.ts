import { USER_AVATARS } from '@features/database/data';

export const mockedUserAvatarService = {
  getUserAvatar: jest.fn().mockResolvedValue(USER_AVATARS[0]),
};
