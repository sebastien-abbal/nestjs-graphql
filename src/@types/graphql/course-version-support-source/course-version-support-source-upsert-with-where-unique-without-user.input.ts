import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceUpdateWithoutUserInput } from './course-version-support-source-update-without-user.input';
import { CourseVersionSupportSourceCreateWithoutUserInput } from './course-version-support-source-create-without-user.input';

@InputType()
export class CourseVersionSupportSourceUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => CourseVersionSupportSourceUpdateWithoutUserInput, {nullable:false})
    update!: CourseVersionSupportSourceUpdateWithoutUserInput;

    @Field(() => CourseVersionSupportSourceCreateWithoutUserInput, {nullable:false})
    create!: CourseVersionSupportSourceCreateWithoutUserInput;
}
