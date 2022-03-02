import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CourseVersionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    versionNumber?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    format?: true;

    @HideField()
    validatedByID?: true;

    @HideField()
    validatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    deletedAt?: true;

    @HideField()
    courseID?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
