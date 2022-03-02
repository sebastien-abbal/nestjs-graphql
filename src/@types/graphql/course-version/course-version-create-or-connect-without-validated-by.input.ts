import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionCreateWithoutValidatedByInput } from './course-version-create-without-validated-by.input';

@InputType()
export class CourseVersionCreateOrConnectWithoutValidatedByInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionCreateWithoutValidatedByInput, {nullable:false})
    create!: CourseVersionCreateWithoutValidatedByInput;
}
