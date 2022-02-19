import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User, UserAvatarPicture } from '../../../../../@graphql/generated';
import { UserAvatarService } from '../../../user/services';

@Resolver(() => User)
export class UserModelResolver {
  constructor(private userAvatarService: UserAvatarService) {}

  @ResolveField('isTermsAccepted', () => Boolean)
  async isTermsAccepted(@Parent() parentUser: User) {
    return Boolean(parentUser.termsAcceptedAt);
  }

  @ResolveField('isBanned', () => Boolean)
  async isBanned(@Parent() parentUser: User) {
    return Boolean(parentUser.bannedAt);
  }

  @ResolveField('isDeleted', () => Boolean)
  async isDeleted(@Parent() parentUser: User) {
    return Boolean(parentUser.deletedAt);
  }

  @ResolveField('avatar', () => UserAvatarPicture, { nullable: true })
  async avatar(@Parent() parentUser: User) {
    return this.userAvatarService.getUserAvatar({
      where: { id: parentUser.id },
    });
  }
}
