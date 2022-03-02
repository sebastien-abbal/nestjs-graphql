import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseUpdateManyMutationInput } from './course-update-many-mutation.input';
import { CourseWhereInput } from './course-where.input';

@ArgsType()
export class UpdateManyCourseArgs {

    @Field(() => CourseUpdateManyMutationInput, {nullable:false})
    data!: CourseUpdateManyMutationInput;

    @Field(() => CourseWhereInput, {nullable:true})
    where?: CourseWhereInput;
}
