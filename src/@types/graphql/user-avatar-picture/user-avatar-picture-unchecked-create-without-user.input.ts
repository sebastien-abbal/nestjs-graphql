import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserAvatarPictureUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MediaProvider, {nullable:true})
    provider?: keyof typeof MediaProvider;

    @Field(() => MediaStatus, {nullable:true})
    status?: keyof typeof MediaStatus;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    fileToDeleteAt?: Date | string;
}
