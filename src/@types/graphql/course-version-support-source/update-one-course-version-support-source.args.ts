import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceUpdateInput } from './course-version-support-source-update.input';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';

@ArgsType()
export class UpdateOneCourseVersionSupportSourceArgs {

    @Field(() => CourseVersionSupportSourceUpdateInput, {nullable:false})
    data!: CourseVersionSupportSourceUpdateInput;

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;
}
