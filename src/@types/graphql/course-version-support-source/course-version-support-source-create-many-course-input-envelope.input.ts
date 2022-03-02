import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateManyCourseInput } from './course-version-support-source-create-many-course.input';

@InputType()
export class CourseVersionSupportSourceCreateManyCourseInputEnvelope {

    @Field(() => [CourseVersionSupportSourceCreateManyCourseInput], {nullable:false})
    data!: Array<CourseVersionSupportSourceCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
