import { config } from '@config';
import { USERS, USER_AVATARS } from '@features/database/data';
import { prisma } from '@features/database/services';
import { hashSync } from 'bcryptjs';

export const seedFakeGenerator = async (): Promise<{ users: number }> => {
  const payload = { users: 0 };

  if (config.env === 'prod' || config.env === 'preprod')
    throw new Error(`Seed can't be set to the env mode [${config.env}].`);

  const isDataAlreadyInDatabase = await isAlreadyReqSeeded();
  if (!isDataAlreadyInDatabase) {
    await prisma.user.createMany({
      data: USERS.map((user) => ({
        ...user,
        password: hashSync(user.password),
      })),
    });
    const result = await prisma.userAvatarPicture.createMany({
      data: USER_AVATARS,
    });
    payload.users = result.count;
  }

  return payload;
};

export const isAlreadyReqSeeded = async (): Promise<boolean> => {
  const isUserDataAlreadyInDatabase = await prisma.user.findFirst();
  return Boolean(isUserDataAlreadyInDatabase);
};
