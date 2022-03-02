import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithoutValidatedByInput } from './course-version-update-without-validated-by.input';

@InputType()
export class CourseVersionUpdateWithWhereUniqueWithoutValidatedByInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionUpdateWithoutValidatedByInput, {nullable:false})
    data!: CourseVersionUpdateWithoutValidatedByInput;
}
