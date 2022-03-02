import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentUpdateWithoutUserInput } from './student-update-without-user.input';
import { StudentCreateWithoutUserInput } from './student-create-without-user.input';

@InputType()
export class StudentUpsertWithoutUserInput {

    @Field(() => StudentUpdateWithoutUserInput, {nullable:false})
    update!: StudentUpdateWithoutUserInput;

    @Field(() => StudentCreateWithoutUserInput, {nullable:false})
    create!: StudentCreateWithoutUserInput;
}
