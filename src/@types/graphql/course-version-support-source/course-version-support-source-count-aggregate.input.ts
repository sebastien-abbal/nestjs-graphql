import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CourseVersionSupportSourceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    provider?: true;

    @HideField()
    status?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @HideField()
    size?: true;

    @HideField()
    width?: true;

    @HideField()
    height?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    deletedAt?: true;

    @HideField()
    fileToDeleteAt?: true;

    @HideField()
    userID?: true;

    @HideField()
    courseID?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
