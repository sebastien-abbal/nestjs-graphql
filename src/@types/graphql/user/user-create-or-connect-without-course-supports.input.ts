import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCourseSupportsInput } from './user-create-without-course-supports.input';

@InputType()
export class UserCreateOrConnectWithoutCourseSupportsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCourseSupportsInput, {nullable:false})
    create!: UserCreateWithoutCourseSupportsInput;
}
