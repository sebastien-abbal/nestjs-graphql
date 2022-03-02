import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateManyCourseInput } from './course-version-create-many-course.input';

@InputType()
export class CourseVersionCreateManyCourseInputEnvelope {

    @Field(() => [CourseVersionCreateManyCourseInput], {nullable:false})
    data!: Array<CourseVersionCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
