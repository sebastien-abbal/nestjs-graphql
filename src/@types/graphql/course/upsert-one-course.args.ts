import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateInput } from './course-create.input';
import { CourseUpdateInput } from './course-update.input';

@ArgsType()
export class UpsertOneCourseArgs {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateInput, {nullable:false})
    create!: CourseCreateInput;

    @Field(() => CourseUpdateInput, {nullable:false})
    update!: CourseUpdateInput;
}
