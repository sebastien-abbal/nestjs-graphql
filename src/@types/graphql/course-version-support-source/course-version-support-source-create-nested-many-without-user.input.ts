import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionSupportSourceCreateWithoutUserInput } from './course-version-support-source-create-without-user.input';
import { CourseVersionSupportSourceCreateOrConnectWithoutUserInput } from './course-version-support-source-create-or-connect-without-user.input';
import { CourseVersionSupportSourceCreateManyUserInputEnvelope } from './course-version-support-source-create-many-user-input-envelope.input';
import { CourseVersionSupportSourceWhereUniqueInput } from './course-version-support-source-where-unique.input';

@InputType()
export class CourseVersionSupportSourceCreateNestedManyWithoutUserInput {

    @Field(() => [CourseVersionSupportSourceCreateWithoutUserInput], {nullable:true})
    create?: Array<CourseVersionSupportSourceCreateWithoutUserInput>;

    @Field(() => [CourseVersionSupportSourceCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CourseVersionSupportSourceCreateOrConnectWithoutUserInput>;

    @Field(() => CourseVersionSupportSourceCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CourseVersionSupportSourceCreateManyUserInputEnvelope;

    @Field(() => [CourseVersionSupportSourceWhereUniqueInput], {nullable:true})
    connect?: Array<CourseVersionSupportSourceWhereUniqueInput>;
}
