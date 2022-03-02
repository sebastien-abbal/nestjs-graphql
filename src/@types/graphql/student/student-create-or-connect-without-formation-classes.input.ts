import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { StudentCreateWithoutFormationClassesInput } from './student-create-without-formation-classes.input';

@InputType()
export class StudentCreateOrConnectWithoutFormationClassesInput {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    where!: StudentWhereUniqueInput;

    @Field(() => StudentCreateWithoutFormationClassesInput, {nullable:false})
    create!: StudentCreateWithoutFormationClassesInput;
}
