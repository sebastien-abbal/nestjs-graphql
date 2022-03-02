import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionWhereUniqueInput } from './course-version-where-unique.input';
import { CourseVersionCreateWithoutFormationSessionsInput } from './course-version-create-without-formation-sessions.input';

@InputType()
export class CourseVersionCreateOrConnectWithoutFormationSessionsInput {

    @Field(() => CourseVersionWhereUniqueInput, {nullable:false})
    where!: CourseVersionWhereUniqueInput;

    @Field(() => CourseVersionCreateWithoutFormationSessionsInput, {nullable:false})
    create!: CourseVersionCreateWithoutFormationSessionsInput;
}
