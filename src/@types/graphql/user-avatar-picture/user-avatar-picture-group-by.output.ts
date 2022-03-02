import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserAvatarPictureCountAggregate } from './user-avatar-picture-count-aggregate.output';
import { UserAvatarPictureAvgAggregate } from './user-avatar-picture-avg-aggregate.output';
import { UserAvatarPictureSumAggregate } from './user-avatar-picture-sum-aggregate.output';
import { UserAvatarPictureMinAggregate } from './user-avatar-picture-min-aggregate.output';
import { UserAvatarPictureMaxAggregate } from './user-avatar-picture-max-aggregate.output';

@ObjectType()
export class UserAvatarPictureGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => MediaProvider, {nullable:false})
    provider!: keyof typeof MediaProvider;

    @Field(() => MediaStatus, {nullable:false})
    status!: keyof typeof MediaStatus;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    fileToDeleteAt?: Date | string;

    @HideField()
    userID!: string;

    @Field(() => UserAvatarPictureCountAggregate, {nullable:true})
    _count?: UserAvatarPictureCountAggregate;

    @Field(() => UserAvatarPictureAvgAggregate, {nullable:true})
    _avg?: UserAvatarPictureAvgAggregate;

    @Field(() => UserAvatarPictureSumAggregate, {nullable:true})
    _sum?: UserAvatarPictureSumAggregate;

    @Field(() => UserAvatarPictureMinAggregate, {nullable:true})
    _min?: UserAvatarPictureMinAggregate;

    @Field(() => UserAvatarPictureMaxAggregate, {nullable:true})
    _max?: UserAvatarPictureMaxAggregate;
}
