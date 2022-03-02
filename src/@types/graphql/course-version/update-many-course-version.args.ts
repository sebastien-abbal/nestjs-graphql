import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionUpdateManyMutationInput } from './course-version-update-many-mutation.input';
import { CourseVersionWhereInput } from './course-version-where.input';

@ArgsType()
export class UpdateManyCourseVersionArgs {

    @Field(() => CourseVersionUpdateManyMutationInput, {nullable:false})
    data!: CourseVersionUpdateManyMutationInput;

    @Field(() => CourseVersionWhereInput, {nullable:true})
    where?: CourseVersionWhereInput;
}
