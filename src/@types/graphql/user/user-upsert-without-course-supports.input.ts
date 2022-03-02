import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCourseSupportsInput } from './user-update-without-course-supports.input';
import { UserCreateWithoutCourseSupportsInput } from './user-create-without-course-supports.input';

@InputType()
export class UserUpsertWithoutCourseSupportsInput {

    @Field(() => UserUpdateWithoutCourseSupportsInput, {nullable:false})
    update!: UserUpdateWithoutCourseSupportsInput;

    @Field(() => UserCreateWithoutCourseSupportsInput, {nullable:false})
    create!: UserCreateWithoutCourseSupportsInput;
}
