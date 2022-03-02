import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { StudentUpdateWithoutFormationClassesInput } from './student-update-without-formation-classes.input';

@InputType()
export class StudentUpdateWithWhereUniqueWithoutFormationClassesInput {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    where!: StudentWhereUniqueInput;

    @Field(() => StudentUpdateWithoutFormationClassesInput, {nullable:false})
    data!: StudentUpdateWithoutFormationClassesInput;
}
