import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithoutValidatedByInput } from './course-version-update-without-validated-by.input';
import { CourseVersionCreateWithoutValidatedByInput } from './course-version-create-without-validated-by.input';

@InputType()
export class CourseVersionUpsertWithWhereUniqueWithoutValidatedByInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionUpdateWithoutValidatedByInput, {nullable:false})
    update!: CourseVersionUpdateWithoutValidatedByInput;

    @Field(() => CourseVersionCreateWithoutValidatedByInput, {nullable:false})
    create!: CourseVersionCreateWithoutValidatedByInput;
}
