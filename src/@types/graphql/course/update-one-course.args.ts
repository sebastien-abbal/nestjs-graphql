import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseUpdateInput } from './course-update.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@ArgsType()
export class UpdateOneCourseArgs {

    @Field(() => CourseUpdateInput, {nullable:false})
    data!: CourseUpdateInput;

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;
}
