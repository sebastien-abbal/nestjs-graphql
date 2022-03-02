import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class FormationSessionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    summaryNote?: true;

    @Field(() => Boolean, {nullable:true})
    format?: true;

    @HideField()
    isEnabled?: true;

    @Field(() => Boolean, {nullable:true})
    startsAt?: true;

    @Field(() => Boolean, {nullable:true})
    endsAt?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    deletedAt?: true;

    @HideField()
    formationID?: true;

    @HideField()
    courseID?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
