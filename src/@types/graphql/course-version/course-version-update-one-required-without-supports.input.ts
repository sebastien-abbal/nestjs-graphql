import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutSupportsInput } from './course-version-create-without-supports.input';
import { CourseVersionCreateOrConnectWithoutSupportsInput } from './course-version-create-or-connect-without-supports.input';
import { CourseVersionUpsertWithoutSupportsInput } from './course-version-upsert-without-supports.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithoutSupportsInput } from './course-version-update-without-supports.input';

@InputType()
export class CourseVersionUpdateOneRequiredWithoutSupportsInput {

    @Field(() => CourseVersionCreateWithoutSupportsInput, {nullable:true})
    create?: CourseVersionCreateWithoutSupportsInput;

    @Field(() => CourseVersionCreateOrConnectWithoutSupportsInput, {nullable:true})
    connectOrCreate?: CourseVersionCreateOrConnectWithoutSupportsInput;

    @Field(() => CourseVersionUpsertWithoutSupportsInput, {nullable:true})
    upsert?: CourseVersionUpsertWithoutSupportsInput;

    @Field(() => CourseVersionWhereUniqueInput, {nullable:true})
    connect?: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionUpdateWithoutSupportsInput, {nullable:true})
    update?: CourseVersionUpdateWithoutSupportsInput;
}
