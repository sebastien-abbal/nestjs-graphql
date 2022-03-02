import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationWhereUniqueInput } from './formation-where-unique.input';
import { FormationCreateWithoutSchoolsInput } from './formation-create-without-schools.input';

@InputType()
export class FormationCreateOrConnectWithoutSchoolsInput {

    @Field(() => FormationWhereUniqueInput, {nullable:false})
    where!: FormationWhereUniqueInput;

    @Field(() => FormationCreateWithoutSchoolsInput, {nullable:false})
    create!: FormationCreateWithoutSchoolsInput;
}
