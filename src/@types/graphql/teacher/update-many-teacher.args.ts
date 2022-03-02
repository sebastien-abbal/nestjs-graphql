import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherUpdateManyMutationInput } from './teacher-update-many-mutation.input';
import { TeacherWhereInput } from './teacher-where.input';

@ArgsType()
export class UpdateManyTeacherArgs {

    @Field(() => TeacherUpdateManyMutationInput, {nullable:false})
    data!: TeacherUpdateManyMutationInput;

    @Field(() => TeacherWhereInput, {nullable:true})
    where?: TeacherWhereInput;
}
