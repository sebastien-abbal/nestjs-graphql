import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserSuccess } from '..';
import { User, UserAvatarPicture } from '../../../../../@graphql/generated';
import { UserAvatarService } from '../../../user/services';

@Resolver(() => UserSuccess)
export class UserModelResolver {
  constructor(private userAvatarService: UserAvatarService) {}

  @ResolveField('avatar', () => UserAvatarPicture, { nullable: true })
  async avatar(@Parent() parentUser: User) {
    return this.userAvatarService.getUserAvatar({
      where: { id: parentUser.id },
    });
  }
}
