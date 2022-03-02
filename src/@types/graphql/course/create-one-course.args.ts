import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCreateInput } from './course-create.input';

@ArgsType()
export class CreateOneCourseArgs {

    @Field(() => CourseCreateInput, {nullable:false})
    data!: CourseCreateInput;
}
