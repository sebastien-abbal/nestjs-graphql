import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeacherUpdateWithoutUserInput } from './teacher-update-without-user.input';
import { TeacherCreateWithoutUserInput } from './teacher-create-without-user.input';

@InputType()
export class TeacherUpsertWithoutUserInput {

    @Field(() => TeacherUpdateWithoutUserInput, {nullable:false})
    update!: TeacherUpdateWithoutUserInput;

    @Field(() => TeacherCreateWithoutUserInput, {nullable:false})
    create!: TeacherCreateWithoutUserInput;
}
