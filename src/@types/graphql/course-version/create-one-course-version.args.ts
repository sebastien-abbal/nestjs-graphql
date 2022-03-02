import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionCreateInput } from './course-version-create.input';

@ArgsType()
export class CreateOneCourseVersionArgs {

    @Field(() => CourseVersionCreateInput, {nullable:false})
    data!: CourseVersionCreateInput;
}
