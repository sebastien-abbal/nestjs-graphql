import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherCreateInput } from './teacher-create.input';

@ArgsType()
export class CreateOneTeacherArgs {

    @Field(() => TeacherCreateInput, {nullable:false})
    data!: TeacherCreateInput;
}
