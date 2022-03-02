import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateInput } from './course-version-support-source-create.input';

@ArgsType()
export class CreateOneCourseVersionSupportSourceArgs {

    @Field(() => CourseVersionSupportSourceCreateInput, {nullable:false})
    data!: CourseVersionSupportSourceCreateInput;
}
