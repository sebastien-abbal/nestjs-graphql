import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { UserUpdateOneRequiredWithoutAvatarPicturesInput } from '../user/user-update-one-required-without-avatar-pictures.input';

@InputType()
export class UserAvatarPictureUpdateInput {

    @HideField()
    id?: string;

    @HideField()
    provider?: keyof typeof MediaProvider;

    @HideField()
    status?: keyof typeof MediaStatus;

    @HideField()
    size?: number;

    @HideField()
    width?: number;

    @HideField()
    height?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    fileToDeleteAt?: Date | string;

    @HideField()
    user?: UserUpdateOneRequiredWithoutAvatarPicturesInput;
}
