import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentScalarWhereInput } from './student-scalar-where.input';
import { StudentUpdateManyMutationInput } from './student-update-many-mutation.input';

@InputType()
export class StudentUpdateManyWithWhereWithoutFormationClassesInput {

    @Field(() => StudentScalarWhereInput, {nullable:false})
    where!: StudentScalarWhereInput;

    @Field(() => StudentUpdateManyMutationInput, {nullable:false})
    data!: StudentUpdateManyMutationInput;
}
