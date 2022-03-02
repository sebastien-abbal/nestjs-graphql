import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCoursesInput } from './user-create-without-courses.input';

@InputType()
export class UserCreateOrConnectWithoutCoursesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCoursesInput, {nullable:false})
    create!: UserCreateWithoutCoursesInput;
}
