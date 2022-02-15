import { UserAvatarService } from '@features/graphql/user/services';
import { User, UserAvatarPicture } from '@graphql';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UserModelResolver {
  constructor(private userAvatarService: UserAvatarService) {}

  @ResolveField('avatar', () => UserAvatarPicture, { nullable: true })
  async avatar(@Parent() parentUser: User) {
    return this.userAvatarService.getUserAvatar({
      where: { id: parentUser.id },
    });
  }
}
