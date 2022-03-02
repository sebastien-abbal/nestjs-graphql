import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { SchoolOrderByWithRelationInput } from './school-order-by-with-relation.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SchoolScalarFieldEnum } from './school-scalar-field.enum';

@ArgsType()
export class FindFirstSchoolArgs {

    @Field(() => SchoolWhereInput, {nullable:true})
    where?: SchoolWhereInput;

    @Field(() => [SchoolOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SchoolOrderByWithRelationInput>;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    cursor?: SchoolWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SchoolScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
