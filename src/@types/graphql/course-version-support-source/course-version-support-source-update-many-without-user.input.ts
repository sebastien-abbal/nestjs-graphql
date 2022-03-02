import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateWithoutUserInput } from './course-version-support-source-create-without-user.input';
import { CourseVersionSupportSourceCreateOrConnectWithoutUserInput } from './course-version-support-source-create-or-connect-without-user.input';
import { CourseVersionSupportSourceUpsertWithWhereUniqueWithoutUserInput } from './course-version-support-source-upsert-with-where-unique-without-user.input';
import { CourseVersionSupportSourceCreateManyUserInputEnvelope } from './course-version-support-source-create-many-user-input-envelope.input';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';
import { CourseVersionSupportSourceUpdateWithWhereUniqueWithoutUserInput } from './course-version-support-source-update-with-where-unique-without-user.input';
import { CourseVersionSupportSourceUpdateManyWithWhereWithoutUserInput } from './course-version-support-source-update-many-with-where-without-user.input';
import { CourseVersionSupportSourceScalarWhereInput } from './course-version-support-source-scalar-where.input';

@InputType()
export class CourseVersionSupportSourceUpdateManyWithoutUserInput {

    @Field(() => [CourseVersionSupportSourceCreateWithoutUserInput], {nullable:true})
    create?: Array<CourseVersionSupportSourceCreateWithoutUserInput>;

    @Field(() => [CourseVersionSupportSourceCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionSupportSourceCreateOrConnectWithoutUserInput>;

    @Field(() => [CourseVersionSupportSourceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<CourseVersionSupportSourceUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CourseVersionSupportSourceCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CourseVersionSupportSourceCreateManyUserInputEnvelope;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    set?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    delete?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionSupportSourceWhereUniqueInput>;

    @Field(() => [CourseVersionSupportSourceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<CourseVersionSupportSourceUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CourseVersionSupportSourceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<CourseVersionSupportSourceUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CourseVersionSupportSourceScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseVersionSupportSourceScalarWhereInput>;
}
