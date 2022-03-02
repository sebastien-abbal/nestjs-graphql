import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';

@InputType()
export class StudentListRelationFilter {

    @Field(() => StudentWhereInput, {nullable:true})
    every?: StudentWhereInput;

    @Field(() => StudentWhereInput, {nullable:true})
    some?: StudentWhereInput;

    @Field(() => StudentWhereInput, {nullable:true})
    none?: StudentWhereInput;
}
