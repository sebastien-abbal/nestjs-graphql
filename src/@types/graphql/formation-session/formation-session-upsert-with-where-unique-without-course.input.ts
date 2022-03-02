import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithoutCourseInput } from './formation-session-update-without-course.input';
import { FormationSessionCreateWithoutCourseInput } from './formation-session-create-without-course.input';

@InputType()
export class FormationSessionUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionUpdateWithoutCourseInput, {nullable:false})
    update!: FormationSessionUpdateWithoutCourseInput;

    @Field(() => FormationSessionCreateWithoutCourseInput, {nullable:false})
    create!: FormationSessionCreateWithoutCourseInput;
}
