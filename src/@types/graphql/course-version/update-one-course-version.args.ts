import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionUpdateInput } from './course-version-update.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';

@ArgsType()
export class UpdateOneCourseVersionArgs {

    @Field(() => CourseVersionUpdateInput, {nullable:false})
    data!: CourseVersionUpdateInput;

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;
}
