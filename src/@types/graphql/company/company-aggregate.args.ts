import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { CompanyOrderByWithRelationInput } from './company-order-by-with-relation.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompanyCountAggregateInput } from './company-count-aggregate.input';
import { CompanyMinAggregateInput } from './company-min-aggregate.input';
import { CompanyMaxAggregateInput } from './company-max-aggregate.input';

@ArgsType()
export class CompanyAggregateArgs {

    @Field(() => CompanyWhereInput, {nullable:true})
    where?: CompanyWhereInput;

    @Field(() => [CompanyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CompanyOrderByWithRelationInput>;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    cursor?: CompanyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CompanyCountAggregateInput, {nullable:true})
    _count?: CompanyCountAggregateInput;

    @Field(() => CompanyMinAggregateInput, {nullable:true})
    _min?: CompanyMinAggregateInput;

    @Field(() => CompanyMaxAggregateInput, {nullable:true})
    _max?: CompanyMaxAggregateInput;
}
