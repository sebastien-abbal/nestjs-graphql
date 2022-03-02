import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';

@InputType()
export class SchoolListRelationFilter {

    @Field(() => SchoolWhereInput, {nullable:true})
    every?: SchoolWhereInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    some?: SchoolWhereInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    none?: SchoolWhereInput;
}
