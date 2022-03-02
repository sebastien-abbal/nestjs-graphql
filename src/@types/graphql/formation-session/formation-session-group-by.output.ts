import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { FormationSessionCountAggregate } from './formation-session-count-aggregate.output';
import { FormationSessionMinAggregate } from './formation-session-min-aggregate.output';
import { FormationSessionMaxAggregate } from './formation-session-max-aggregate.output';

@ObjectType()
export class FormationSessionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    summaryNote?: string;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @Field(() => Boolean, {nullable:false})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Date, {nullable:false})
    endsAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    formationID!: string;

    @HideField()
    courseID!: string;

    @Field(() => FormationSessionCountAggregate, {nullable:true})
    _count?: FormationSessionCountAggregate;

    @Field(() => FormationSessionMinAggregate, {nullable:true})
    _min?: FormationSessionMinAggregate;

    @Field(() => FormationSessionMaxAggregate, {nullable:true})
    _max?: FormationSessionMaxAggregate;
}
