import { USER_AVATARS } from '../../../database/data/seed';

export const mockedUserAvatarService = {
  getUserAvatar: jest.fn().mockResolvedValue(USER_AVATARS[0]),
};
