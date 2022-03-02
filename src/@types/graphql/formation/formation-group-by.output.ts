import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FormationType } from '../prisma/formation-type.enum';
import { FormationFormat } from '../prisma/formation-format.enum';
import { FormationTimeFormat } from '../prisma/formation-time-format.enum';
import { FormationCountAggregate } from './formation-count-aggregate.output';
import { FormationMinAggregate } from './formation-min-aggregate.output';
import { FormationMaxAggregate } from './formation-max-aggregate.output';

@ObjectType()
export class FormationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => FormationType, {nullable:false})
    type!: keyof typeof FormationType;

    @Field(() => FormationFormat, {nullable:false})
    format!: keyof typeof FormationFormat;

    @Field(() => FormationTimeFormat, {nullable:false})
    timeFormat!: keyof typeof FormationTimeFormat;

    @Field(() => Boolean, {nullable:false})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    headMasterID?: string;

    @Field(() => String, {nullable:true})
    companyID?: string;

    @Field(() => FormationCountAggregate, {nullable:true})
    _count?: FormationCountAggregate;

    @Field(() => FormationMinAggregate, {nullable:true})
    _min?: FormationMinAggregate;

    @Field(() => FormationMaxAggregate, {nullable:true})
    _max?: FormationMaxAggregate;
}
