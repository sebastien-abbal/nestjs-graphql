import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateManyInput } from './course-version-support-source-create-many.input';

@ArgsType()
export class CreateManyCourseVersionSupportSourceArgs {

    @Field(() => [CourseVersionSupportSourceCreateManyInput], {nullable:false})
    data!: Array<CourseVersionSupportSourceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
