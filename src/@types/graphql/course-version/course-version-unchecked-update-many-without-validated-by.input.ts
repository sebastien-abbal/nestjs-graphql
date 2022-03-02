import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutValidatedByInput } from './course-version-create-without-validated-by.input';
import { CourseVersionCreateOrConnectWithoutValidatedByInput } from './course-version-create-or-connect-without-validated-by.input';
import { CourseVersionUpsertWithWhereUniqueWithoutValidatedByInput } from './course-version-upsert-with-where-unique-without-validated-by.input';
import { CourseVersionCreateManyValidatedByInputEnvelope } from './course-version-create-many-validated-by-input-envelope.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithWhereUniqueWithoutValidatedByInput } from './course-version-update-with-where-unique-without-validated-by.input';
import { CourseVersionUpdateManyWithWhereWithoutValidatedByInput } from './course-version-update-many-with-where-without-validated-by.input';
import { CourseVersionScalarWhereInput } from './course-version-scalar-where.input';

@InputType()
export class CourseVersionUncheckedUpdateManyWithoutValidatedByInput {

    @Field(() => [CourseVersionCreateWithoutValidatedByInput], {nullable:true})
    create?: Array<CourseVersionCreateWithoutValidatedByInput>;

    @Field(() => [CourseVersionCreateOrConnectWithoutValidatedByInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionCreateOrConnectWithoutValidatedByInput>;

    @Field(() => [CourseVersionUpsertWithWhereUniqueWithoutValidatedByInput], {nullable:true})
    upsert?: Array<CourseVersionUpsertWithWhereUniqueWithoutValidatedByInput>;

    @Field(() => CourseVersionCreateManyValidatedByInputEnvelope, {nullable:true})
    createMany?: CourseVersionCreateManyValidatedByInputEnvelope;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    set?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    delete?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionWhereUniqueInput>;

    @Field(() => [CourseVersionUpdateWithWhereUniqueWithoutValidatedByInput], {nullable:true})
    update?: Array<CourseVersionUpdateWithWhereUniqueWithoutValidatedByInput>;

    @Field(() => [CourseVersionUpdateManyWithWhereWithoutValidatedByInput], {nullable:true})
    updateMany?: Array<CourseVersionUpdateManyWithWhereWithoutValidatedByInput>;

    @Field(() => [CourseVersionScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseVersionScalarWhereInput>;
}
