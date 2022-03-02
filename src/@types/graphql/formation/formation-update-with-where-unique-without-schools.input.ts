import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutSchoolsInput } from './formation-update-without-schools.input';

@InputType()
export class FormationUpdateWithWhereUniqueWithoutSchoolsInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutSchoolsInput, {nullable:false})
    data!: FormationUpdateWithoutSchoolsInput;
}
