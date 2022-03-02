import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { StudentCreateWithoutUserInput } from './student-create-without-user.input';

@InputType()
export class StudentCreateOrConnectWithoutUserInput {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    where!: StudentWhereUniqueInput;

    @Field(() => StudentCreateWithoutUserInput, {nullable:false})
    create!: StudentCreateWithoutUserInput;
}
