import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { SchoolLogoPictureCountAggregate } from './school-logo-picture-count-aggregate.output';
import { SchoolLogoPictureAvgAggregate } from './school-logo-picture-avg-aggregate.output';
import { SchoolLogoPictureSumAggregate } from './school-logo-picture-sum-aggregate.output';
import { SchoolLogoPictureMinAggregate } from './school-logo-picture-min-aggregate.output';
import { SchoolLogoPictureMaxAggregate } from './school-logo-picture-max-aggregate.output';

@ObjectType()
export class SchoolLogoPictureGroupBy {

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
    schoolID!: string;

    @Field(() => SchoolLogoPictureCountAggregate, {nullable:true})
    _count?: SchoolLogoPictureCountAggregate;

    @Field(() => SchoolLogoPictureAvgAggregate, {nullable:true})
    _avg?: SchoolLogoPictureAvgAggregate;

    @Field(() => SchoolLogoPictureSumAggregate, {nullable:true})
    _sum?: SchoolLogoPictureSumAggregate;

    @Field(() => SchoolLogoPictureMinAggregate, {nullable:true})
    _min?: SchoolLogoPictureMinAggregate;

    @Field(() => SchoolLogoPictureMaxAggregate, {nullable:true})
    _max?: SchoolLogoPictureMaxAggregate;
}
