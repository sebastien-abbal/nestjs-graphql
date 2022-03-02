import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionCreateWithoutFormationSessionsInput } from './course-version-create-without-formation-sessions.input';
import { CourseVersionCreateOrConnectWithoutFormationSessionsInput } from './course-version-create-or-connect-without-formation-sessions.input';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';

@InputType()
export class CourseVersionCreateNestedOneWithoutFormationSessionsInput {

    @Field(() => CourseVersionCreateWithoutFormationSessionsInput, {nullable:true})
    create?: CourseVersionCreateWithoutFormationSessionsInput;

    @Field(() => CourseVersionCreateOrConnectWithoutFormationSessionsInput, {nullable:true})
    connectOrCreate?: CourseVersionCreateOrConnectWithoutFormationSessionsInput;

    @Field(() => CourseVersionWhereUniqueInput, {nullable:true})
    connect?: CourseVersionWhereUniqueInput;
}
