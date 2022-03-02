import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceCreateInput } from './course-version-support-source-create.input';
import { CourseVersionSupportSourceUpdateInput } from './course-version-support-source-update.input';

@ArgsType()
export class UpsertOneCourseVersionSupportSourceArgs {

    @Field(() => CourseVersionSupportSourceWhereUniqueInput, {nullable:false})
    where!: CourseVersionSupportSourceWhereUniqueInput;

    @Field(() => CourseVersionSupportSourceCreateInput, {nullable:false})
    create!: CourseVersionSupportSourceCreateInput;

    @Field(() => CourseVersionSupportSourceUpdateInput, {nullable:false})
    update!: CourseVersionSupportSourceUpdateInput;
}
