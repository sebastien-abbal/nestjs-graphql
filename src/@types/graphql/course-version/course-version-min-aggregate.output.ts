import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class CourseVersionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    versionNumber?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => SessionFormat, {nullable:true})
    format?: keyof typeof SessionFormat;

    @Field(() => String, {nullable:true})
    validatedByID?: string;

    @Field(() => Date, {nullable:true})
    validatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    duration?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    courseID?: string;
}
