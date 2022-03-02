import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutFormationSessionsInput } from './course-version-create-without-formation-sessions.input';
import { CourseVersionCreateOrConnectWithoutFormationSessionsInput } from './course-version-create-or-connect-without-formation-sessions.input';
import { CourseVersionUpsertWithoutFormationSessionsInput } from './course-version-upsert-without-formation-sessions.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionUpdateWithoutFormationSessionsInput } from './course-version-update-without-formation-sessions.input';

@InputType()
export class CourseVersionUpdateOneRequiredWithoutFormationSessionsInput {

    @Field(() => CourseVersionCreateWithoutFormationSessionsInput, {nullable:true})
    create?: CourseVersionCreateWithoutFormationSessionsInput;

    @Field(() => CourseVersionCreateOrConnectWithoutFormationSessionsInput, {nullable:true})
    connectOrCreate?: CourseVersionCreateOrConnectWithoutFormationSessionsInput;

    @Field(() => CourseVersionUpsertWithoutFormationSessionsInput, {nullable:true})
    upsert?: CourseVersionUpsertWithoutFormationSessionsInput;

    @Field(() => CourseVersionWhereUniqueInput, {nullable:true})
    connect?: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionUpdateWithoutFormationSessionsInput, {nullable:true})
    update?: CourseVersionUpdateWithoutFormationSessionsInput;
}
