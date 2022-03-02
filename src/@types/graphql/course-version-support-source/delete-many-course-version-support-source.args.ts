import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceWhereInput } from './course-version-support-source-where.input';

@ArgsType()
export class DeleteManyCourseVersionSupportSourceArgs {

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    where?: CourseVersionSupportSourceWhereInput;
}
