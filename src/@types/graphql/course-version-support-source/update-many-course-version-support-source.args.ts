import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseVersionSupportSourceUpdateManyMutationInput } from './course-version-support-source-update-many-mutation.input';
import { CourseVersionSupportSourceWhereInput } from './course-version-support-source-where.input';

@ArgsType()
export class UpdateManyCourseVersionSupportSourceArgs {

    @Field(() => CourseVersionSupportSourceUpdateManyMutationInput, {nullable:false})
    data!: CourseVersionSupportSourceUpdateManyMutationInput;

    @Field(() => CourseVersionSupportSourceWhereInput, {nullable:true})
    where?: CourseVersionSupportSourceWhereInput;
}
