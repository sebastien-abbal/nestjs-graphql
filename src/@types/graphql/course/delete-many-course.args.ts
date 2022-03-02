import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseWhereInput } from './course-where.input';

@ArgsType()
export class DeleteManyCourseArgs {

    @Field(() => CourseWhereInput, {nullable:true})
    where?: CourseWhereInput;
}
