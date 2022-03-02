import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherWhereInput } from './teacher-where.input';

@ArgsType()
export class DeleteManyTeacherArgs {

    @Field(() => TeacherWhereInput, {nullable:true})
    where?: TeacherWhereInput;
}
