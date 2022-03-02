import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionScalarWhereInput } from './course-version-scalar-where.input';
import { CourseVersionUpdateManyMutationInput } from './course-version-update-many-mutation.input';

@InputType()
export class CourseVersionUpdateManyWithWhereWithoutCourseInput {

    @Field(() => CourseVersionScalarWhereInput, {nullable:false})
    where!: CourseVersionScalarWhereInput;

    @Field(() => CourseVersionUpdateManyMutationInput, {nullable:false})
    data!: CourseVersionUpdateManyMutationInput;
}
