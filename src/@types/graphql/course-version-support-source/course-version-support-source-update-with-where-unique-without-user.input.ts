import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceUpdateWithoutUserInput } from './course-version-support-source-update-without-user.input';

@InputType()
export class CourseVersionSupportSourceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => CourseVersionSupportSourceUpdateWithoutUserInput, {nullable:false})
    data!: CourseVersionSupportSourceUpdateWithoutUserInput;
}
