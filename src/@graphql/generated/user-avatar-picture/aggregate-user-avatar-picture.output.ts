import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserAvatarPictureCountAggregate } from './user-avatar-picture-count-aggregate.output';
import { UserAvatarPictureAvgAggregate } from './user-avatar-picture-avg-aggregate.output';
import { UserAvatarPictureSumAggregate } from './user-avatar-picture-sum-aggregate.output';
import { UserAvatarPictureMinAggregate } from './user-avatar-picture-min-aggregate.output';
import { UserAvatarPictureMaxAggregate } from './user-avatar-picture-max-aggregate.output';

@ObjectType()
export class AggregateUserAvatarPicture {

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
