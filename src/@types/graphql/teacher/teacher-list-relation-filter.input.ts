import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherWhereInput } from './teacher-where.input';

@InputType()
export class TeacherListRelationFilter {

    @Field(() => TeacherWhereInput, {nullable:true})
    every?: TeacherWhereInput;

    @Field(() => TeacherWhereInput, {nullable:true})
    some?: TeacherWhereInput;

    @Field(() => TeacherWhereInput, {nullable:true})
    none?: TeacherWhereInput;
}
