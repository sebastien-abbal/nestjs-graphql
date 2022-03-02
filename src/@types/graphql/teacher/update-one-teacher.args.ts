import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherUpdateInput } from './teacher-update.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';

@ArgsType()
export class UpdateOneTeacherArgs {

    @Field(() => TeacherUpdateInput, {nullable:false})
    data!: TeacherUpdateInput;

    @Field(() => TeacherWhereUniqueInput, {nullable:false})
    where!: TeacherWhereUniqueInput;
}
