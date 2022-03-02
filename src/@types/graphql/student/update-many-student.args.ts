import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentUpdateManyMutationInput } from './student-update-many-mutation.input';
import { StudentWhereInput } from './student-where.input';

@ArgsType()
export class UpdateManyStudentArgs {

    @Field(() => StudentUpdateManyMutationInput, {nullable:false})
    data!: StudentUpdateManyMutationInput;

    @Field(() => StudentWhereInput, {nullable:true})
    where?: StudentWhereInput;
}
