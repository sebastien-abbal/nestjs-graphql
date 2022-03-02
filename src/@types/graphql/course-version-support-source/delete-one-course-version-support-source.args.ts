import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';

@ArgsType()
export class DeleteOneCourseVersionSupportSourceArgs {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;
}
