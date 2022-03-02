import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCoursesInput } from './user-update-without-courses.input';
import { UserCreateWithoutCoursesInput } from './user-create-without-courses.input';

@InputType()
export class UserUpsertWithoutCoursesInput {

    @Field(() => UserUpdateWithoutCoursesInput, {nullable:false})
    update!: UserUpdateWithoutCoursesInput;

    @Field(() => UserCreateWithoutCoursesInput, {nullable:false})
    create!: UserCreateWithoutCoursesInput;
}
