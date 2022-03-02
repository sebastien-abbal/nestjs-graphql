import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';

@ArgsType()
export class DeleteOneTeacherArgs {

    @Field(() => TeacherWhereUniqueInput, {nullable:false})
    where!: TeacherWhereUniqueInput;
}
