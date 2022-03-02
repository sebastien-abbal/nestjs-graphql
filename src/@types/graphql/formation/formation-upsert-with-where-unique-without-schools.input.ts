import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationUpdateWithoutSchoolsInput } from './formation-update-without-schools.input';
import { FormationCreateWithoutSchoolsInput } from './formation-create-without-schools.input';

@InputType()
export class FormationUpsertWithWhereUniqueWithoutSchoolsInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationUpdateWithoutSchoolsInput, {nullable:false})
    update!: FormationUpdateWithoutSchoolsInput;

    @Field(() => FormationCreateWithoutSchoolsInput, {nullable:false})
    create!: FormationCreateWithoutSchoolsInput;
}
