import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassCountAggregate } from './formation-class-count-aggregate.output';
import { FormationClassMinAggregate } from './formation-class-min-aggregate.output';
import { FormationClassMaxAggregate } from './formation-class-max-aggregate.output';

@ObjectType()
export class FormationClassGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @HideField()
    formationID!: string;

    @Field(() => FormationClassCountAggregate, {nullable:true})
    _count?: FormationClassCountAggregate;

    @Field(() => FormationClassMinAggregate, {nullable:true})
    _min?: FormationClassMinAggregate;

    @Field(() => FormationClassMaxAggregate, {nullable:true})
    _max?: FormationClassMaxAggregate;
}
