import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { TeacherCreateInput } from './teacher-create.input';
import { TeacherUpdateInput } from './teacher-update.input';

@ArgsType()
export class UpsertOneTeacherArgs {

    @Field(() => TeacherWhereUniqueInput, {nullable:false})
    where!: TeacherWhereUniqueInput;

    @Field(() => TeacherCreateInput, {nullable:false})
    create!: TeacherCreateInput;

    @Field(() => TeacherUpdateInput, {nullable:false})
    update!: TeacherUpdateInput;
}
