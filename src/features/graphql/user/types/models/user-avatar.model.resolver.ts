import { config } from '@config';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserAvatarPicture } from '@types';

@Resolver(() => UserAvatarPicture)
export class UserAvatarPictureModelResolver {
  @ResolveField('url', () => String)
  async url(@Parent() parentUserAvatarPicture: UserAvatarPicture) {
    return `${config.app.cdnUrl}/${parentUserAvatarPicture.id}`;
  }
}
