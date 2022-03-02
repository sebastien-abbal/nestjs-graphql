import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceCreateWithoutUserInput } from './course-version-support-source-create-without-user.input';

@InputType()
export class CourseVersionSupportSourceCreateOrConnectWithoutUserInput {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => CourseVersionSupportSourceCreateWithoutUserInput, {nullable:false})
    create!: CourseVersionSupportSourceCreateWithoutUserInput;
}
