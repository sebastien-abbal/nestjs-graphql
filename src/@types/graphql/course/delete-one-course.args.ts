import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@ArgsType()
export class DeleteOneCourseArgs {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;
}
