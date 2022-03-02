import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseVersionUpdateWithoutFormationSessionsInput } from './course-version-update-without-formation-sessions.input';
import { CourseVersionCreateWithoutFormationSessionsInput } from './course-version-create-without-formation-sessions.input';

@InputType()
export class CourseVersionUpsertWithoutFormationSessionsInput {

    @Field(() => CourseVersionUpdateWithoutFormationSessionsInput, {nullable:false})
    update!: CourseVersionUpdateWithoutFormationSessionsInput;

    @Field(() => CourseVersionCreateWithoutFormationSessionsInput, {nullable:false})
    create!: CourseVersionCreateWithoutFormationSessionsInput;
}
