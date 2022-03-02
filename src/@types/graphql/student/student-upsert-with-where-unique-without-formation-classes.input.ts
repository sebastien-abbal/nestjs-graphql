import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { StudentUpdateWithoutFormationClassesInput } from './student-update-without-formation-classes.input';
import { StudentCreateWithoutFormationClassesInput } from './student-create-without-formation-classes.input';

@InputType()
export class StudentUpsertWithWhereUniqueWithoutFormationClassesInput {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    where!: StudentWhereUniqueInput;

    @Field(() => StudentUpdateWithoutFormationClassesInput, {nullable:false})
    update!: StudentUpdateWithoutFormationClassesInput;

    @Field(() => StudentCreateWithoutFormationClassesInput, {nullable:false})
    create!: StudentCreateWithoutFormationClassesInput;
}
