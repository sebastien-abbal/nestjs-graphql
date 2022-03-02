import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutVersionsInput } from './course-create-without-versions.input';
import { CourseCreateOrConnectWithoutVersionsInput } from './course-create-or-connect-without-versions.input';
import { CourseUpsertWithoutVersionsInput } from './course-upsert-without-versions.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutVersionsInput } from './course-update-without-versions.input';

@InputType()
export class CourseUpdateOneRequiredWithoutVersionsInput {

    @Field(() => CourseCreateWithoutVersionsInput, {nullable:true})
    create?: CourseCreateWithoutVersionsInput;

    @Field(() => CourseCreateOrConnectWithoutVersionsInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutVersionsInput;

    @Field(() => CourseUpsertWithoutVersionsInput, {nullable:true})
    upsert?: CourseUpsertWithoutVersionsInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutVersionsInput, {nullable:true})
    update?: CourseUpdateWithoutVersionsInput;
}
