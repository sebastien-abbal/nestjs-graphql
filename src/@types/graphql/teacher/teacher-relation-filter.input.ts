import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherWhereInput } from './teacher-where.input';

@InputType()
export class TeacherRelationFilter {

    @Field(() => TeacherWhereInput, {nullable:true})
    is?: TeacherWhereInput;

    @Field(() => TeacherWhereInput, {nullable:true})
    isNot?: TeacherWhereInput;
}
