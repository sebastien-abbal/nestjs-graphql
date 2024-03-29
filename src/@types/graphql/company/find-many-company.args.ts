import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { CompanyOrderByWithRelationInput } from './company-order-by-with-relation.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompanyScalarFieldEnum } from './company-scalar-field.enum';

@ArgsType()
export class FindManyCompanyArgs {

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

    @Field(() => [CompanyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CompanyScalarFieldEnum>;
}
