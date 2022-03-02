import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';

@InputType()
export class SchoolRelationFilter {

    @Field(() => SchoolWhereInput, {nullable:true})
    is?: SchoolWhereInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    isNot?: SchoolWhereInput;
}
