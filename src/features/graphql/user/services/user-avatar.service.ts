import { PrismaService } from '@features/database/services';
import { Injectable } from '@nestjs/common';
import { MediaStatus, UserAvatarPicture, UserWhereUniqueInput } from '@types';

@Injectable()
export class UserAvatarService {
  constructor(private prisma: PrismaService) {}

  public async getUserAvatar({
    where,
  }: {
    where: UserWhereUniqueInput;
  }): Promise<UserAvatarPicture> {
    return this.prisma.userAvatarPicture.findFirst({
      where: {
        user: where,
        status: MediaStatus.ONLINE,
        deletedAt: null,
        fileToDeleteAt: null,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
