import { MediaStatus } from '@features/database/types';
import { UserAvatar } from '@features/graphql/user/entities';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserAvatarService {
  constructor(
    @Inject('USER_AVATAR_REPOSITORY')
    private userAvatarRepository: Repository<UserAvatar>,
  ) {}

  public async getUserAvatar({
    userID,
  }: {
    userID: string;
  }): Promise<UserAvatar> {
    return this.userAvatarRepository.findOne({
      where: {
        user: { id: userID },
        status: MediaStatus.ONLINE,
        deletedAt: null,
        fileToDeleteAt: null,
      },
      order: { createdAt: 'ASC' },
    });
  }
}
