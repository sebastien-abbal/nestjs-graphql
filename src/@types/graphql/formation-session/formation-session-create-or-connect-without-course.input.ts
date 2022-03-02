import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionCreateWithoutCourseInput } from './formation-session-create-without-course.input';

@InputType()
export class FormationSessionCreateOrConnectWithoutCourseInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionCreateWithoutCourseInput, {nullable:false})
    create!: FormationSessionCreateWithoutCourseInput;
}
