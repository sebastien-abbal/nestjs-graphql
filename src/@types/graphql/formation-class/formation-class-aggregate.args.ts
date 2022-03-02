import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormationClassWhereInput } from './formation-class-where.input';
import { FormationClassOrderByWithRelationInput } from './formation-class-order-by-with-relation.input';
import { FormationClassWhereUniqueInput } from './formation-class-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormationClassCountAggregateInput } from './formation-class-count-aggregate.input';
import { FormationClassMinAggregateInput } from './formation-class-min-aggregate.input';
import { FormationClassMaxAggregateInput } from './formation-class-max-aggregate.input';

@ArgsType()
export class FormationClassAggregateArgs {

    @Field(() => FormationClassWhereInput, {nullable:true})
    where?: FormationClassWhereInput;

    @Field(() => [FormationClassOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormationClassOrderByWithRelationInput>;

    @Field(() => FormationClassWhereUniqueInput, {nullable:true})
    cursor?: FormationClassWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FormationClassCountAggregateInput, {nullable:true})
    _count?: FormationClassCountAggregateInput;

    @Field(() => FormationClassMinAggregateInput, {nullable:true})
    _min?: FormationClassMinAggregateInput;

    @Field(() => FormationClassMaxAggregateInput, {nullable:true})
    _max?: FormationClassMaxAggregateInput;
}
