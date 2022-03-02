import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionCreateInput } from './course-version-create.input';
import { CourseVersionUpdateInput } from './course-version-update.input';

@ArgsType()
export class UpsertOneCourseVersionArgs {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionCreateInput, {nullable:false})
    create!: CourseVersionCreateInput;

    @Field(() => CourseVersionUpdateInput, {nullable:false})
    update!: CourseVersionUpdateInput;
}
