import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceScalarWhereInput } from './course-version-support-source-scalar-where.input';
import { CourseVersionSupportSourceUpdateManyMutationInput } from './course-version-support-source-update-many-mutation.input';

@InputType()
export class CourseVersionSupportSourceUpdateManyWithWhereWithoutUserInput {

    @Field(() => CourseVersionSupportSourceScalarWhereInput, {nullable:false})
    where!: CourseVersionSupportSourceScalarWhereInput;

    @Field(() => CourseVersionSupportSourceUpdateManyMutationInput, {nullable:false})
    data!: CourseVersionSupportSourceUpdateManyMutationInput;
}
