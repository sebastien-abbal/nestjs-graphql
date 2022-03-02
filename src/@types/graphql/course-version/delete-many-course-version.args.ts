import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionWhereInput } from './course-version-where.input';

@ArgsType()
export class DeleteManyCourseVersionArgs {

    @Field(() => CourseVersionWhereInput, {nullable:true})
    where?: CourseVersionWhereInput;
}
