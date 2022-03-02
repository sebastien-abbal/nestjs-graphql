import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithoutCourseInput } from './formation-session-update-without-course.input';

@InputType()
export class FormationSessionUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionUpdateWithoutCourseInput, {nullable:false})
    data!: FormationSessionUpdateWithoutCourseInput;
}
