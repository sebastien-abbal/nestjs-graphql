import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutValidatedByInput } from './course-version-create-without-validated-by.input';
import { CourseVersionCreateOrConnectWithoutValidatedByInput } from './course-version-create-or-connect-without-validated-by.input';
import { CourseVersionCreateManyValidatedByInputEnvelope } from './course-version-create-many-validated-by-input-envelope.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';

@InputType()
export class CourseVersionUncheckedCreateNestedManyWithoutValidatedByInput {

    @Field(() => [CourseVersionCreateWithoutValidatedByInput], {nullable:true})
    create?: Array<CourseVersionCreateWithoutValidatedByInput>;

    @Field(() => [CourseVersionCreateOrConnectWithoutValidatedByInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionCreateOrConnectWithoutValidatedByInput>;

    @Field(() => CourseVersionCreateManyValidatedByInputEnvelope, {nullable:true})
    createMany?: CourseVersionCreateManyValidatedByInputEnvelope;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionWhereUniqueInput>;
}
