import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherScalarWhereInput } from './teacher-scalar-where.input';
import { TeacherUpdateManyMutationInput } from './teacher-update-many-mutation.input';

@InputType()
export class TeacherUpdateManyWithWhereWithoutFormationClassesInput {

    @Field(() => TeacherScalarWhereInput, {nullable:false})
    where!: TeacherScalarWhereInput;

    @Field(() => TeacherUpdateManyMutationInput, {nullable:false})
    data!: TeacherUpdateManyMutationInput;
}
